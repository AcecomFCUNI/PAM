using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Platformfall : MonoBehaviour
{
    private Rigidbody2D rb;
    public float t = 1f;
    private bool e = false;
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }
    private void FixedUpdate()
    {
        if (e && t > 0)
        {
            t -= Time.fixedDeltaTime;
        }
    }
    private void OnCollisionStay2D(Collision2D collision)
    {
        if (collision.gameObject.GetComponent<PlayerController>())
        {
            e = true;
            if (t <= 0)
            {
                rb.gravityScale = 1;
                rb.mass = 100;
            }
        }
    }
    private void OnCollisionExit2D(Collision2D collision)
    {
        rb.gravityScale = 0;
    }
}
