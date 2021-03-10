using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class PlayerController : MonoBehaviour
{
    public float life, maxLife, power, speed, jump, dashSpeed, n_att =0 , max_att=2;
    public bool grounded;
    public Objects obj;
    public TextMeshProUGUI n_coins;
    public TextMeshProUGUI n_potions;
    public GameObject pos;
    protected bool can_jump = false, can_dash = false, can_attack=false, can_mov=true;
    protected float cooldown_DashTime = 0f;
    protected float cooldown_DamageTime = 0f;
    protected float cooldown_HealTime = 0f;
    protected float dashTime;
    public float obst_time = 0f;
    protected float startDashTime = 0.1f;
    protected int dir_dash = 1;
    public Rigidbody2D rb = null;
    protected GameObject weapon = null;
    protected GameObject dc = null;
    protected CapsuleCollider2D cc = null;
    protected Animator anim = null;
    protected SpriteRenderer sr = null;
    protected bool go = false;
    public float jumps = 0;

    public void GameOver()
    {
        if(life <= 0)
        {
            go = true;
        }
    }
    public void DamageRecivedObstacle(float dmg)
    {
        life -= dmg;
        sr.color = new Color(255, 0, 0);
        obst_time = 0.5f;
        cooldown_DamageTime = 0.5f;
        grounded = true;
    }
    public void Color_Anim()
    {
        if(cooldown_DamageTime > 0)
        {
            cooldown_DamageTime -= Time.fixedDeltaTime;
        }

        if (cooldown_HealTime >= 0)
        {
            cooldown_HealTime -= Time.fixedDeltaTime;
        }
        if(cooldown_DamageTime <=0 && cooldown_HealTime<=0) 
        { 
            sr.color = new Color(255, 255, 255); 
        }
    }
    public void UsePotion()
    {
        if (obj.potions > 0 && Input.GetKeyDown(KeyCode.H) && this.life>0)
        {
            cooldown_HealTime = 0.3f;
            sr.color = new Color(0, 255, 0);
            obj.AddPotions(-1);
            n_potions.text = obj.potions.ToString();
            if (Mathf.Abs(life - maxLife) >= 30)
            {
                this.life += 30;
            }
            else
            {
                this.life += Mathf.Abs(life - maxLife);
            }
        }
    }
    public void ObstTime()
    {
        if (obst_time >= 0)
        {
            obst_time -= Time.fixedDeltaTime;
        }
    }
    public void Dir_Mov(float x)
    {
        if(x == 1)
        {
            dir_dash = 1;
        }
        else if(x == -1)
        {
            dir_dash = -1;
        }
        if (life > 0)
        {
            this.transform.localScale = new Vector3(dir_dash * 1, 1, 1);
        }
    }
    public void Mov()
    {
        if (can_mov)
        {
            rb.velocity = new Vector2(Input.GetAxisRaw("Horizontal") * speed, rb.velocity.y);
            if (weapon.activeInHierarchy == true)
            {
                weapon.SetActive(false);
            }
        }
    }
    public void IsDash()
    {
        if (Input.GetKeyDown(KeyCode.LeftShift) && cooldown_DashTime <= 0)
        {
            can_dash = true;
        }
    } public void Attack()
    {
        if (can_attack)
        {
            rb.velocity = new Vector2(0,rb.velocity.y);
            weapon.SetActive(true);
            can_attack = false;
            can_mov = true;
            n_att+=Time.deltaTime;
        }
    }
    public void IsAttack()
    {
        if (Input.GetKey(KeyCode.Z) && n_att<max_att/2 && life > 0)
        {
            can_attack = true;
            can_mov = false;
        }
        if (Input.GetKeyUp(KeyCode.Z))
        {
            n_att = 0;
            weapon.SetActive(false);
        }
    }
    public void Animations()
    {
        anim.SetFloat("speed", Mathf.Abs(rb.velocity.x));
        anim.SetBool("grounded", grounded);
        anim.SetBool("attack", can_attack);
        anim.SetFloat("dead", life);
    }
    public void IsDead()
    {
        if(life <= 0)
        {
            speed = 0;
            cc.enabled = false;
            dc.SetActive(true);
        }
    }
    private void Awake()
    {
        pos = GameObject.Find("Inicial_Pos");
        this.gameObject.transform.position = pos.transform.position;
    }
    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        dc = this.transform.GetChild(1).transform.gameObject;
        cc = GetComponent<CapsuleCollider2D>();
        sr = GetComponent<SpriteRenderer>();
        weapon = this.transform.GetChild(0).transform.gameObject;
        anim = GetComponent<Animator>();
        dashTime = startDashTime;
        weapon.SetActive(false);
        dc.SetActive(false);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Coin"))
        {
            Destroy(collision.gameObject);
            obj.AddCoins(1);
            if (obj.coins < 10)
            {
                n_coins.text = "0" + obj.coins.ToString();
            }
            else
            {
                n_coins.text = obj.coins.ToString();
            }
            if (obj.coins % 10 == 0)
            {
                obj.AddPotions(1);
                n_potions.text = obj.potions.ToString();
            }
        }
        if (collision.CompareTag("Potion"))
        {
            Destroy(collision.gameObject);
            obj.AddPotions(1); 
            n_potions.text = obj.potions.ToString();
        }
        if (collision.gameObject.CompareTag("Jump") || collision.gameObject.CompareTag("Wall"))
        {
            if (collision.gameObject.CompareTag("Wall"))
            {
                this.cc.sharedMaterial.friction = 1f;
            }
            else
            {
                this.cc.sharedMaterial.friction = 0f;
            }
            jumps = 0;
        }
    }
}
