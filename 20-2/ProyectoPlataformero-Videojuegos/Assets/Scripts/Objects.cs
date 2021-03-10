using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Objects : MonoBehaviour
{
    public int coins=0;
    public int potions=0;
    public void AddCoins(int i)
    {
        coins += i;
    }
    public void AddPotions(int i)
    {
        potions += i;
    }
}
