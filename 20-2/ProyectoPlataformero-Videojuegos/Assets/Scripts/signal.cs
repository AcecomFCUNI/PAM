using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class signal : MonoBehaviour
{
    private TextMeshProUGUI help;
    public string str="";
    void Start()
    {
        help = GameObject.Find("help_text").GetComponent<TextMeshProUGUI>();
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.GetComponent<PlayerController>())
        {
            help.text = str;
        }
    }
    private void OnTriggerExit2D(Collider2D collision)
    {
        help.text = "";
    }
}
