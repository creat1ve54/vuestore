<template>
    <div className='v-catalog'>
        <div className='container'>
            <div className='v-catalog__menu'>
                <div className='v-catalog__left'>
                    <h4 className='v-catalog__caption'>Недавние поступления</h4>
                    <h2 className='v-catalog__title'>Новые товары</h2>
                </div>
                <div className='v-catalog__right'>
                    <h4 className='v-catalog__caption v-catalog__caption--sort'>Сортировать:</h4>
                    <ul className='v-catalog__list'>
                        <li @click="Option" className='v-catalog__item v-catalog__item--one'>
                            {{ option1 }}
                            <img :src="require('../assets/image/vector.svg')" alt="vector"
                                className='v-catalog__vector' />
                        </li>
                        <li @click="Option" className='v-catalog__item'>{{ option4 }}</li>
                    </ul>
                </div>
            </div>
            <div className='v-catalog__product product'>
                <v-catalog-item v-for="product in NEW_PRODUCT" :key="product.id" :product_data="product" />
            </div>
            <div v-if="PRODUCT.length > this.limit && (PRODUCT?.length / this.lastIndex >= 1)" @click="ProductAdd"
                className='product__btn btn'>Показать еще</div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import VCatalogItem from './v-catalog-item.vue'
export default {
    name: 'v-catalog',
    components: {
        VCatalogItem
    },
    data() {
        return {
            option1: '',
            option4: '',
            option2: 'Цена по возрастанию',
            option3: 'Цена по убыванию',
            page: 1,
            limit: 8,
            lastIndex: 0,
            firstIndex: 0,
            currentPage: Array,
            open: false
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCT',
            'NEW_PRODUCT'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCT_FROM_API',
            'ADD_NEW_PRODUCT'
        ]),

        ProductAdd() {
            this.page++;
            this.lastIndex = this.page * this.limit
            this.firstIndex = this.lastIndex - this.limit
            this.currentPage = this.PRODUCT.slice(this.firstIndex, this.lastIndex)
            for (let i = 0; i < this.currentPage.length; i++) {
                this.NEW_PRODUCT?.push(this.currentPage[i])
            }
        },

        Option(e) {
            this.Open()
            if (e.target.innerHTML === 'Цена по возрастанию' && this.option1 !== 'Цена по возрастанию') {
                this.option1 = this.option2
                this.option4 = this.option3
            }
            if (e.target.innerHTML === 'Цена по убыванию' && this.option1 !== 'Цена по убыванию') {
                this.option1 = this.option3
                this.option4 = this.option2
            }
        },

        Open() {
            this.open = !this.open
            if (!this.open) {
                document.querySelector('.v-catalog__list')?.classList.add('v-catalog__list--active')
                document.querySelector('.v-catalog__vector')?.classList.add('v-catalog__vector--active')
            } else {
                document.querySelector('.v-catalog__list')?.classList.remove('v-catalog__list--active')
                document.querySelector('.v-catalog__vector')?.classList.remove('v-catalog__vector--active')
            }
        }

    },
    mounted() {
        this.GET_PRODUCT_FROM_API()
        this.option1 = this.option2
        this.option4 = this.option3
    }
}
</script>
<style lang="scss">
.v-catalog {
    padding-top: 64px;


    &__menu {
        display: flex;
        justify-content: space-between;
        margin-bottom: 48px;
        height: 90px;
    }

    &__list {
        overflow: hidden;
        padding: 0;
        margin: 0;
        padding: 14px 16px;
        list-style: none;
        background: #FFFFFF;
        border: 1px solid #EFF0F2;
        border-radius: 16px;
        width: 200px;
        height: 18px;

        &--active {
            height: 53px;
        }
    }

    &__item {
        cursor: pointer;

        &--one {
            position: relative;
        }
    }

    &__vector {
        position: absolute;
        top: 6px;
        right: 15px;

        &--active {
            transform: rotate(180deg);
        }
    }

    &__item:not(:last-child) {
        margin-bottom: 16px;
    }

    &__right {
        display: flex;
    }

    &__caption {
        padding: 0;
        margin: 0;
        margin-bottom: 4px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #9095A9;

        &--sort {
            margin-bottom: 0;
            margin-top: 13px;
            margin-right: 12px;
        }
    }

    &__title {
        padding: 0;
        margin: 0;
        font-weight: 700;
        font-size: 36px;
        line-height: 43px;
        color: #121720;
    }
}
</style>