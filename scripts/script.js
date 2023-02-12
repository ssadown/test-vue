const app = new Vue ({
    el: '#app-magazine',
    data: {
        vueLogo: 'images/vue-logo.svg',
        vueAlt: 'Логотип VueJs',
        image: 'images/black-hoodie.png',
        hoodieText: 'Чёрное худи',
        cost: 'Цена: 1 500 ₽',
        haveBlack: 10,
        haveWhite: 5,
        haveOrange: 10,
        haveHoodie:'Есть в наличии',
        check: 0,
        details: ['80% ткань', '20% полиэстра', 'Принт'],
        cart: 0,
        variants: [
            {
                variantId: 1,
                variantColor: 'Чёрное худи',
                variantImage: 'images/black-hoodie.png',
                variantHave: 10,
            },
            {
                variantId: 2,
                variantColor: 'Белое худи',
                variantImage: 'images/orange-hoodie.png',
                variantHave: 3,
            },
            {
                variantId: 3,
                variantColor: 'Оранжевое худи',
                variantImage: 'images/white-hoodie.png',
                variantHave: 5,
            }
        ]
    },
    methods: {
        haveMinus () {
            if (this.check == 0) {
                this.haveBlack -= 1;
                if (this.haveBlack >= 0) {
                    this.cart += 1;
                    };
            } else if (this.check == 1) {
                this.haveWhite -= 1;
                if (this.haveWhite >= 0) {
                    this.cart += 1;
                    }
            } else if (this.check == 2) {
                this.haveOrange -= 1;
                if (this.haveOrange >= 0) {
                    this.cart += 1;
                    }
            }
        },
        switchColorBlack () {
            this.image = `images/black-hoodie.png`;
            this.hoodieText = 'Чёрное худи';
            this.check = 0;
        },
        switchColorWhite () {
            this.image = `images/orange-hoodie.png`;
            this.hoodieText = 'Белое худи';
            this.check = 1;
        },
        switchColorOrange () {
            this.image = `images/white-hoodie.png`;
            this.hoodieText = 'Оранжевое худи';
            this.check = 2;
        },
    },
})