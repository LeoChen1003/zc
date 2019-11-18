<template>
    <div class="blank">
        <div class="lab">
            <div class="lab_title">智能实验室</div>
            <div class="lab_con1">
                <div class="lab_con1_l">
                    <p>国家实验室</p>
                    <p>获得国家认可委员会实验室认可。严格执行检验标准、规划，确保检测方法的科学性。引入LVO2HC4:358 SHIYAN 实验室管理体系，达标国际级标准。</p>
                </div>
                <div class="lab_con1_r">
                    <img src="../assets/aboutUs/1.jpg" alt="">
                </div>
            </div>
            <div class="lab_con2">
                <div class="lab_con2_l">
                    <img src="../assets/aboutUs/2.jpg" alt="">
                </div>
                <div class="lab_con2_r">
                    <p>高学历人才</p>
                    <p>引入高学历人才，实验室人员均为本科以上学历，保证实验操作的科学与严谨。</p>
                </div>
            </div>
            <div class="lab_con3">
                <div class="lab_con3_l">
                    <p>专业化实验设备</p>
                    <p>划分7个专业化实验室，引入专业化实验设备。实验室涵盖电磁兼容实验室、环境实验室、高压实验室等。</p>
                </div>
                <div class="lab_con3_r">
                    <img src="../assets/aboutUs/3.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scope>
.blank{
    border-top: 1px solid rgb(218, 216, 216);
    .lab{
        width: 61.25rem;
        margin: 0 auto;
        margin-bottom: 12.8rem;
        .lab_title{
            margin: 0 auto;
            margin-top: 5.81rem;
            font-size: 1.75rem;
            color: #000;
            width: 8.81rem;
        }
        .lab_con1{
            width: 100%;
            height: 26.125rem;
            .lab_con1_l{
                width: 41.06rem;
                float: left;
                p:first-child{
                    font-size: 1.62rem;
                    color: #000;
                    font-weight: 600;
                    margin-top: 5.73rem;
                    margin-left: 6.56rem;
                }
                p:last-child{
                    color: #333;
                    width: 27.9rem;
                    margin-left: 6.56rem;
                    margin-top: 1.44rem;
                }
            }
            .lab_con1_r{
                float: left;
                width: 20rem;
                height: 100%;
                border: 1px solid #ccc;
            }
        }
        .lab_con2{
            width:100%;
            height: 25rem;
            .lab_con2_l{
                width: 41rem;
                height: 100%;
                float: left;
                border: 1px solid #ccc;
            }
            .lab_con2_r{
                float: left;
                width: 20rem;
                height:100%;
                p:first-child{
                    font-size: 1.62rem;
                    color: #000;
                    font-weight: 600;
                    margin-top: 6.87rem;
                    margin-left: 4.06rem;
                }
                p:last-child{
                    font-size: 1rem;
                    color: #333;
                    margin-top: 1.43rem;
                    margin-left: 4.06rem;
                    width: 12.12rem;
                }
            }
        }
        .lab_con3{
            width: 100%;
            height: 21.12rem;
            .lab_con3_l{
                height: 100%;
                float: left;
                width: 41rem;
                p:first-child{
                    font-size: 1.62rem;
                    color: #000;
                    font-weight: 600;
                    margin-top: 6.06rem;
                    margin-left: 6.56rem;
                }
                p:last-child{
                    margin-top: 1.43rem;
                    margin-left: 6.56rem;
                    font-size: 1rem;
                    color: #333;
                    width: 27.9rem;
                }
            }
            .lab_con3_r{
                float: left;
                height: 100%;
                border: 1px solid #cccccc;
                width: 20.1rem;
            }
        }
    }
}
</style>