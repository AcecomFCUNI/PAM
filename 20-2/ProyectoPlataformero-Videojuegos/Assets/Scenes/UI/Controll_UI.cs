using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using UnityEngine.SceneManagement;

public class Controll_UI : MonoBehaviour
{
    [Header("Menu")]
    public GameObject mm;
    public GameObject play;
    public Button playbtn;
    public Button optbtn;
    public Button xmbtn;
    [Header("Options")]
    public GameObject opt;
    public Button xbtn;

    void Start()
    {
        mm.SetActive(true);
        opt.SetActive(false);
        playbtn.onClick.AddListener(() =>
        {
            play.SetActive(true);
            SceneManager.LoadScene(1);
        });
        optbtn.onClick.AddListener(() =>
        {
            opt.SetActive(true);
            playbtn.gameObject.SetActive(false);
            optbtn.interactable=false;
            xmbtn.interactable = false;
        }); 
        xmbtn.onClick.AddListener(() =>
        {
            Application.Quit();
        }); 
        xbtn.onClick.AddListener(() =>
        {
            opt.SetActive(false);
            playbtn.gameObject.SetActive(true);
            optbtn.interactable = true;
            xmbtn.interactable = true;
        });
    }
}
