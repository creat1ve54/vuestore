<template >
    <div class='v-header'>
        <div className='v-header__container container'>
            <div className='v-header__logo'>
                <router-link to='/'>
                    <img :src="require('../assets/image/logo.svg')" alt='Logo' />
                </router-link>
            </div>
            <ul className='v-header__list'>
                <router-link to='/male' class='v-header__item'>
                    Мужское
                </router-link>
                <router-link to='/female' class='v-header__item'>
                    Женское </router-link>
                <router-link to='/unisex' class='v-header__item'>
                    Унисекс
                </router-link>
                <router-link to='/sale' class='v-header__item'>
                    Sale
                </router-link>
                <router-link to='/faq' class='v-header__item'>
                    FAQ
                </router-link>
                <router-link to='/transaction' class='v-header__item'>
                    Безопасная сделка
                </router-link>
                <router-link to='/rules' class='v-header__item'>
                    Правила пользования
                </router-link>
            </ul>
            <ul className='v-header__info info'>
                <li className='info__item'>
                    <img :src="require('../assets/image/fav.svg')" alt='Fav' />
                </li>
                <li className='info__item'>
                    <img :src="require('../assets/image/person.svg')" alt='Person' />
                </li>
                <li className='info__item'>
                    <a className='info__btn btn' href='##'>Подать</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'v-header',
}
</script>
<style lang="scss">
.v-header {
    padding: 33px 0px 34px 0px;

    .router-link-active {
        font-weight: 600;
        text-decoration: underline;
    }

    &__container {
        display: flex;
        align-items: center;
    }

    &__list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: space-between;
        max-width: 730px;
        width: 100%;
    }

    &__logo {
        margin-right: 48px;
    }

    &__item {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #121720;
        text-decoration: none;
    }

    &__item:last-child {
        margin-right: 37px;
    }
}


.info {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    &__item:not(:last-child) {
        margin-right: 22px;
    }

    &__btn {
        padding: 14px 32px;
        width: 126px;
        height: 47px;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
    }
}
</style>