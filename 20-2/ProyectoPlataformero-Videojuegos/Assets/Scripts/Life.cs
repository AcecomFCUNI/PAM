using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Life : MonoBehaviour
{
    public TextMeshProUGUI txt;
    private Image life_bar;
    public Movement_Tank player1;
    private void Start()
    {
        life_bar = GameObject.Find("life").GetComponent<Image>();
        player1 = GameObject.Find("Tank").GetComponent<Movement_Tank>();
    }
    void Update()
    {
        if (player1.gameObject.activeInHierarchy)
        {
            life_bar.fillAmount = player1.life / player1.maxLife;
            if(player1.life < 0)
            {
                player1.life = 0;
            }
            txt.text = player1.life.ToString();
        }
    }
}
