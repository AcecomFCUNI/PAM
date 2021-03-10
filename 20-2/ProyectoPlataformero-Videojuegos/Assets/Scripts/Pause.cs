using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Pause : MonoBehaviour
{
    public GameObject pause=null;
    public GameObject GO=null;
    public Button play=null;
    public Button exit=null;

    // Update is called once per frame
    private void Start()
    {
        play.onClick.AddListener(() =>
        {
            pause.SetActive(false);
            Time.timeScale = 1;
        });
        exit.onClick.AddListener(() =>
        {
            Application.Quit();
        });
    }
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Escape) && GO.gameObject.activeInHierarchy == false)
        {
            Time.timeScale = 0;
            pause.SetActive(true);
        }
    }
}
