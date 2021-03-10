using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Movement_Tank : PlayerController
{
    private void IsJump()
    {
        if (Input.GetKeyDown(KeyCode.Space) && grounded && jumps < 1)
        {
            jumps++;
            can_jump = true;
        }
    }
    private void Jump()
    {
        if (can_jump)
        {
            rb.AddForce(transform.up * jump, ForceMode2D.Impulse);
            can_jump = false;
            grounded = false;
        }
    }
    private void Dash()
    {
        cooldown_DashTime -= Time.fixedDeltaTime;
        if (can_dash)
        {
            if (dashTime <= 0)
            {
                if (!grounded)
                {
                    cooldown_DashTime = 1f;
                }
                else
                {
                    cooldown_DashTime = 0.8f;
                }
                dashTime = startDashTime;
                rb.velocity = Vector2.zero;
                can_dash = false;
                rb.gravityScale = 1;
            }
            else
            {
                rb.gravityScale = 0;
                dashTime -= Time.fixedDeltaTime;
                rb.AddForce(new Vector2(dashSpeed * dir_dash, 0), ForceMode2D.Impulse);
            }
        }
    }
    void Update()
    {
        UsePotion();
        Animations();
        ObstTime();
        IsDash();
        Dir_Mov(Input.GetAxisRaw("Horizontal"));
        IsJump();
        IsAttack();
        IsDead();
        Jump();
    }
    private void FixedUpdate()
    {
        ObstTime();
        Color_Anim();
        Mov();
        Dash();
        Attack();
    }
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            grounded = true;
        }
    }
}
