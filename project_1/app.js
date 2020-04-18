new Vue({
    el: '#app',
    data: {
        isGameStart: false,
        playerHealth: 100,
        monstarHealth: 100,
        logs: []

    },
    methods: {
        startGame: function() {
            this.isGameStart = true
            this.playerHealth = 100
            this.monstarHealth = 100
        },
        attack: function() {
            var damage = this.calculateDamege(10, 3)
            this.monstarHealth -= damage
            this.logs.unshift({
                isPlayer: true,
                log: 'player hit monstar for damage' + damage
            })
            if (this.checkWin()) {
                return
            }
            this.playerHealth -= this.calculateDamege(12, 5)
            this.checkWin()
        },
        specialAttack: function() {
            this.monstarHealth -= this.calculateDamege(20, 10)
            if (this.checkWin()) {
                return
            }
            this.monstarAttack()
        },
        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10
            } else {
                this.playerHealth = 100
            }
            this.monstarAttack()
        },
        giveUp: function() {
            this.isGameStart = false
        },
        calculateDamege: function(max, min) {
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
            return damage
        },
        checkWin: function() {
            if (this.monstarHealth <= 0) {
                if (confirm('you win! again?')) {
                    this.startGame()
                } else {
                    this.isGameStart = false
                }
                return true
            } else if (this.playerHealth <= 0) {
                if (confirm('you loss! again?')) {
                    this.startGame()
                } else {
                    this.isGameStart = false
                }
                return true
            }
            return false
        },
        monstarAttack: function() {
            var damage = this.calculateDamege(12, 5)
            this.playerHealth -= damage
            this.logs.unshift({
                isPlayer: false,
                log: 'mostar hit player for damage' + damage
            })
            this.checkWin()
        }
    },
})