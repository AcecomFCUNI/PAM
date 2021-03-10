using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;

public class portal2 : MonoBehaviour
{
    private TextMeshProUGUI h = null;
    private GameObject sin = null;
    private bool sp = false;
    void Start()
    {
        h = GameObject.Find("help_text").GetComponent<TextMeshProUGUI>();
        sin = GameObject.Find("Single");
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
        if (collision.GetComponent<PlayerController>() && sp)
        {
            Destroy(sin);
            Destroy(collision.gameObject);
            SceneManager.LoadScene(3);
            h.text = "";
        }
    }
    private void OnTriggerExit2D(Collider2D collision)
    {
        h.text = "";
    }
}
