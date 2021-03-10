using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class GameOver : MonoBehaviour
{
    public GameObject GO = null;
    public GameObject ui = null;
    public PlayerController player=null;
    public Button restart = null;
    public Button exit = null;
    public GameObject single = null;
    private int a = 0;
    void Start()
    {
        a = SceneManager.GetActiveScene().buildIndex;
        restart.onClick.AddListener(() =>
        {
            Destroy(single.gameObject);
            SceneManager.LoadScene(a);
        });
        exit.onClick.AddListener(() =>
        {
            Application.Quit();
        });
    }

    // Update is called once per frame
    void Update()
    {
        if (player.life <= 0)
        {
            GO.SetActive(true);
            ui.SetActive(false);
        }
    }
}
