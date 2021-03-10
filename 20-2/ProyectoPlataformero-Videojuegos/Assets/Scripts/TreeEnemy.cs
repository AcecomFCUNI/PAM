using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class TreeEnemy : MonoBehaviour
{
    private int i = -1;
    public int power;
    public float speed = 0f;
    public float mov_time = 0f;
    public float idle_time = 0f;
    public float life = 0f;
    public float life_max = 0f;
    private float mov_inicial = 0f;
    private float idle_inicial = 0f;
    private float cooldown_attack = 2f;
    private bool distance = false;
    private bool mov = false;
    private bool dead=false;
    private bool player_trigger = false;
    private bool attack = false;
    private Animator anim = null;
    private Rigidbody2D rb=null;
    private Movement_Tank p1 = null;
    private BoxCollider2D bc = null;
    private CircleCollider2D cc = null;
    private SpriteRenderer sr = null;
    public void Dead()
    {
        if(life <= 0)
        {
            dead = true;
            rb.velocity = new Vector2(0, rb.velocity.y);
            bc.enabled = false;
            cc.enabled = false;
        }
    }
    public void DamageTaken(int dmg)
    {
        this.life -= p1.power*dmg;
        sr.size = new Vector2((float)(sr.size.x * life / life_max), 0.2f);
        if (life < 0)
        {
            life = 0;
        }
    }
    public void Mov()
    {
        if (!player_trigger)
        {
            if (mov)
            {
                rb.velocity = new Vector2(i * speed, rb.velocity.y);
                idle_time = 2f;
            }
            else
            {
                rb.velocity = new Vector2(0, rb.velocity.y);
                idle_time -= Time.deltaTime;
            }
        }
        else
        {
            if(!distance)
            {
                rb.velocity = new Vector2(i * speed, rb.velocity.y);
            }
        }
    }
    public void Animations()
    {
        anim.SetBool("mov", mov);
        anim.SetBool("attack", attack);
        anim.SetFloat("life", life);
    }
    public void Attack()
    {
        if (attack)
        {
            p1.DamageRecivedObstacle(power);
            attack = false;
            cooldown_attack = 1f;
        }
    }
    void Start()
    {
        bc = GetComponent<BoxCollider2D>();
        cc = GetComponent<CircleCollider2D>();
        rb = GetComponent<Rigidbody2D>();
        anim = GetComponent<Animator>();
        sr = this.transform.GetChild(1).gameObject.GetComponent<SpriteRenderer>();
        p1 = GameObject.Find("Tank").GetComponent<Movement_Tank>();
        mov_inicial = mov_time;
        idle_inicial = idle_time;
    }
    void Update()
    {
        Dead();
        if (!dead) {
            Mov();
        }
        Animations();
    }
    private void FixedUpdate()
    {
        if (!dead)
        {
            Attack();
            cooldown_attack -= Time.deltaTime;
            if (mov_time > 0)
            {
                mov_time -= Time.deltaTime;
            }
            else
            {
                mov_time = mov_inicial;
                if (idle_time > 0)
                {
                    mov = false;
                }
                else
                {
                    mov = true;
                    idle_time = idle_inicial;
                    i *= -1;
                    this.transform.localScale = new Vector3(-1 * this.transform.localScale.x, this.transform.localScale.y, 1);
                }
            }
        }
    }
    private void OnTriggerStay2D(Collider2D collision)
    {
        if(collision.GetComponent<PlayerController>())
        {
            player_trigger = true;
            if(collision.GetComponent<PlayerController>().obst_time <= 0)
            {
                if(Mathf.Abs(collision.gameObject.transform.position.x - this.transform.position.x) <= 2f && collision.GetComponent<PlayerController>().life > 0 && cooldown_attack <=0)
                {
                    attack = true;
                    distance = true;
                }
                else
                {
                    distance = false;
                }
            }
        }
    }
    private void OnTriggerExit2D(Collider2D collision)
    {
        if (collision.GetComponent<PlayerController>())
        {
            player_trigger = false;
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.name == "Weapon" )
        {
            DamageTaken(5);
        }
    }
}
