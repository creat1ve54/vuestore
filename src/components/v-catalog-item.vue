<template>
    <div className='product__body'>
        <img  className='product__img' :src="(require('../assets/image/product/' + product_data.url))" alt={product.name} />
        <div className='product__case'>
            <div className='product__title'>{{ product_data.name }}</div>
            <div v-if="product_data.salePrice" className='product__sale-price'>{{ product_data.salePrice }}</div>
            <div className='product__price'>{{ product_data.price }}</div>
        </div>
        <hr className='product__line' />
        <div className='product__descr'>{{ product_data.description }}</div>
        <div className='product__size'>{{ product_data.size }}</div>
    </div>
</template>
<script>
export default {
    name: 'v-catalog-item',
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    }
}
</script>
<style lang="scss">
.product {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 32px 14px;
    margin-bottom: 32px;

    &__title {
        padding: 0;
        margin: 0;
        flex: 50%;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #121720;
    }


    &__btn {
        cursor: pointer;
        width: 104px;
        padding: 14px 32px 14px 32px;
        margin: 0 auto;
    }

    &__case {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
    }

    &__sale-price {
        padding: 0;
        margin: 0;
        font-size: 16px;
        text-decoration-line: line-through;
        line-height: 19px;
        color: #EB5783;
        flex: 5%;
        margin-right: 10px;
    }

    &__price {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #121720;
    }

    &__descr {
        padding: 0;
        margin: 0;
        margin-bottom: 8px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #9095A9;
    }

    &__size {
        padding: 0;
        margin: 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #9095A9;
    }

    &__line {
        border: 1px solid #EFF0F2;
    }

    &__img {
        width: 267px;
        height: 267px;
    }
}
</style>