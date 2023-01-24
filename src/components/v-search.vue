<template>
    <div className='v-search'>
        <div className='container'>
            <div className='v-search__container'>
                <img :src="require('../assets/image/search.svg')" alt="Search" className='v-search__img' />
                <div className='v-search__input v-search__input--invisible'>
                    <input 
                        @blur="onBlurInput" 
                        @focus="onFocusInput" 
                        v-bind:value="search" 
                        @input="search = $event.target.value" 
                        type="text">

                    <img @click="onClear" :src="require('../assets/image/close.svg')" alt="Close"
                        className='v-search__close v-search__close--invisible' />
                </div>
                <div className='v-search__animation'>
                    <div className='v-search__wrapper'>
                        <label className='v-search__label'>Поиск товара, бренда или продавца...</label>
                        <label className='v-search__label'>Поиск товара, бренда или продавца...</label>
                        <label className='v-search__label'>Поиск товара, бренда или продавца...</label>
                        <label className='v-search__label'>Поиск товара, бренда или продавца...</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'v-search',
    data() {
        return {
            search: ''
        }
    },
    computed: {

    },
    methods: {
        onFocusInput() {
            document.querySelector('.v-search__animation')?.classList.add('v-search__animation--invisible')
            document.querySelector('.v-search__close')?.classList.remove('v-search__close--invisible')
        },

        onBlurInput() {
            if (this.search === '') {
                document.querySelector('.v-search__animation')?.classList.remove('v-search__animation--invisible')
                document.querySelector('.v-search__close')?.classList.add('v-search__close--invisible')
            }
        },

        onClear() {
            this.search = ''
            document.querySelector('.v-search__animation')?.classList.remove('v-search__animation--invisible')
            document.querySelector('.v-search__close')?.classList.add('v-search__close--invisible')
        },
    }
}
</script>

<style lang="scss">
.v-search {
    background-color: #121720;
    padding: 18px 0px;

    &__container {
        position: relative;
        display: flex;
        height: 24px;



    }

    &__img {
        margin-right: 20px;
    }


    &__input {
        position: relative;
        display: block;
        width: 96%;
        z-index: 1;

        input {
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
            width: 98%;
            outline: none;
            color: #fff;

            padding-right: 20px;
            margin: 0;
            border: inherit;
            background: transparent;
        }

    }

    &__close {
        position: absolute;
        display: block;
        right: -20px;
        top: 0;
        cursor: pointer;

        &--invisible {
            display: none;
        }
    }

    &__animation {
        display: block;
        position: absolute;
        overflow: hidden;
        width: 96%;
        left: 44px;

        &--invisible {
            display: none;
        }
    }

    &__wrapper {
        display: flex;
    }

    &__label {
        color: rgba(255, 255, 255, 0.4);
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        white-space: nowrap;
        flex-shrink: 0;
        animation: text 5s linear infinite;
    }

    @keyframes text {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-100%);
        }
    }
}
</style>