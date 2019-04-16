<template>
    <div class="introduce-wrap">
        <div class="introduce pcWidth">
            <h3>
                <slot></slot>
            </h3>
            <div class="introduce-text">
                nidslkdjlkfjldkjlkj
                nidslkdjlkfjldkjlkj
                nidslkdjlkfjldkjlkj34234234234234234
                nidslkdjlkfjldkjlkj
                12321234234234234234234234234234234
                nidslkdjlkfjldkjlkj
                nidslkdjlkfjldkjlkj12323113232323233333
                nidslkdjlkfjldkjlkj
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.introduce-wrap{
    background:#fff;
    padding: 20px 0 ;
    .introduce{
        .introduce-text{
            padding:10px;
            border:1px solid #fdcfcc;
            background:#fffcfc;
            font-size: 16px;
            color:#333333;
            word-break: break-all;
            word-wrap: break-word; 
            line-height:30px;
        }
    }
}
</style>

