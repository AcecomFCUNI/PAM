using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SimpleObst : MonoBehaviour
{
    public int dmg;
    void Start()
    {
        
    }

    
    void Update()
    {
        
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.GetComponent<PlayerController>())
        {
            if(collision.gameObject.GetComponent<PlayerController>().obst_time <= 0.5)
            {
                collision.gameObject.GetComponent<PlayerController>().rb.AddForce(transform.up * 500, ForceMode2D.Impulse);
                collision.gameObject.GetComponent<PlayerController>().DamageRecivedObstacle(dmg);
            }
        }
    }
}
