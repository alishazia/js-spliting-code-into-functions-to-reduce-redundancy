// const ATTACK_VALUE = 10;
// const STRONG_ATTACK_VALUE = 17;
// const MONSTER_ATTACK_VALUE = 14;
// const HEAL_VALUE = 20;

// let chosenMaxLife = 100;
// let currentMonsterHealth = chosenMaxLife;
// let currentPlayerHealth = chosenMaxLife;
// let hasBonusLife = true;

// adjustHealthBars(chosenMaxLife);

// function reset() {
//   currentMonsterHealth = chosenMaxLife;
//   currentPlayerHealth = chosenMaxLife;
//   resetGame(chosenMaxLife);
// }

// function endRound() {
//   const initialPlayerHealth = currentPlayerHealth;
//   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
//   currentPlayerHealth -= playerDamage;

//   if (currentPlayerHealth <= 0 && hasBonusLife) {
//     hasBonusLife = false;
//     removeBonusLife();
//     currentPlayerHealth = initialPlayerHealth;
//     setPlayerHealth(initialPlayerHealth);
//     alert('You would be dead but the bonus life saved you!');
//   }

//   if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
//     alert('You won!');
//   } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
//     alert('You lost!');
//   } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
//     alert('You have a draw!');
//   }

//   if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
//     reset();
//   }
// }

// function attackMonster(mode) {
//   let maxDamage;
//   if (mode === 'ATTACK') {
//     maxDamage = ATTACK_VALUE;
//   } else if (mode === 'STRONG_ATTACK') {
//     maxDamage = STRONG_ATTACK_VALUE;
//   }
//   const damage = dealMonsterDamage(maxDamage);
//   currentMonsterHealth -= damage;
//   endRound();
// }

// function attackHandler() {
//   attackMonster('ATTACK');
// }

// function strongAttackHandler() {
//   attackMonster('STRONG_ATTACK');
// }

// function healPlayerHandler() {
//   let healValue;
//   if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
//     alert("You can't heal to more than your max initial health.");
//     healValue = chosenMaxLife - currentPlayerHealth;
//   } else {
//     healValue = HEAL_VALUE;
//   }
//   increasePlayerHealth(healValue);
//   currentPlayerHealth += healValue;
//   endRound();
// }

// attackBtn.addEventListener('click', attackHandler);
// strongAttackBtn.addEventListener('click', strongAttackHandler);
// healBtn.addEventListener('click', healPlayerHandler);


const ATTACK_VALUE = 10;
MONSTER_ATTACK_VALUE = 4;

let chosenMaxLife = 100;
let currentPlayerHealth = chosenMaxLife;
let currentMonsterHealth = chosenMaxLife;

attackBtn.addEventListener('click', attackHandler);

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    let initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    let initialmonsterHealth = currentMonsterHealth;
    const monsterDamage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= monsterDamage;

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
    }
}

strongAttackBtn.addEventListener('click', strongAttackHandler)

let STRONG_ATTACK_VALUE = 20;
let STRONG_MONESTER_ATTACK_VALUE = 30;

function strongAttackHandler() {

    let initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(STRONG_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    let initialmonsterHealth = currentMonsterHealth;
    const monsterDamage = dealMonsterDamage(STRONG_MONESTER_ATTACK_VALUE);
    currentMonsterHealth -= monsterDamage;
   
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
    }

}

