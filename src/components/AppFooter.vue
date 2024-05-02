<script>

export default{
    name: 'AppFooter',

    data(){
        return{
            year: new Date().getFullYear(),
            companyName: 'Nome della tua azienda',
        }
    }
}

</script>

<template>
    <footer class="footer fixed-bottom">
      <div class="container">
        <div class="footer-content">
          <div class="copyright">
            &copy; {{ year }} Created by: Miriam Evardi, Francesco Gioscia e Alessio Di Mari
          </div>
          <div class="social-links">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  
  
<style lang="scss">
.footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    font-size: large;

    .container {
        width: 80%;
        margin: 0 auto;
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .social-links{
                display: flex;
                gap: 16px;

                i{
                    cursor: pointer;

                    font-size: x-large
                }
            }
        }
    }
}

</style>