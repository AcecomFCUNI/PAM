using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;

public class portal : MonoBehaviour
{
    private TextMeshProUGUI h = null;
    private bool sp = false;
    void Start()
    {
        h = GameObject.Find("help_text").GetComponent<TextMeshProUGUI>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            sp = true;
        }
    }
    private void OnTriggerStay2D(Collider2D collision)
    {
        h.text = "presiona space para pasar de nivel";
        if(collision.GetComponent<PlayerController>() && sp)
        {
            SceneManager.LoadScene(2);
            collision.GetComponent<PlayerController>().transform.position = GameObject.Find("Inicial_Pos").transform.position + new Vector3(3, 4, 0); ;
            h.text = "";
        }
    }
    private void OnTriggerExit2D(Collider2D collision)
    {
        h.text = "";
    }
}
