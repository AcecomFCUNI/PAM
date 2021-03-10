using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlatformMov : MonoBehaviour
{
    public float time_mov = 0;
    public float time_idle = 0;
    private float tm;
    private float ti;
    public float velx = 0.0f;
    public float vely = 0.0f;
    private int dir = 1;
    private GameObject single=null;
    void Start()
    {
        tm = time_mov;
        ti = time_idle;
        single = GameObject.Find("Single");
    }
    void FixedUpdate()
    {
        if (time_mov > 0 && time_idle > 0)
        {
            this.transform.Translate( velx * dir, vely * dir, 0);
            time_mov -= Time.deltaTime;
        }
        else
        {
            if (time_idle > 0)
            {
                time_idle -= Time.deltaTime;
            }
            else
            {
                dir *= -1;
                time_mov = tm;
                time_idle = ti;
            }
        }
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.GetComponent<PlayerController>())
        {
            collision.gameObject.transform.SetParent(this.gameObject.transform);
        }
    }
    private void OnCollisionExit2D(Collision2D collision)
    {
        if (collision.gameObject.GetComponent<PlayerController>())
        {
            collision.gameObject.transform.SetParent(single.gameObject.transform);
        }
    }
}
