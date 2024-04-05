<template>
  <section class="m-4">
    <h2 class="text-center">{{ message }}</h2>
    <h3 class="">Директива v-model</h3>
    <form class="" action="#" method="POST">
      <input v-model="login" class="p-1" type="text" name="login" value="" placeholder="Введите логин">
      <p>Ваш логин: {{ login }}</p>
    </form>


    <h3 class="">Директива v-if</h3>
    <div class="" v-if="seen">
      <p>Этот блок виден, так как переменная "seen" - истинна</p>
      <p>А второй блок убран из DOM-дерева</p>
    </div>

    <div class="" v-if="!seen">
      <p>Этот блок не виден, так как переменная "seen" - ложна</p>
      <p>Он убран из DOM-дерева</p>
    </div>


    <h3 class="">Директива v-show</h3>
    <div class="" v-show="seen">
      <p>Этот блок виден, так как переменная "seen" - истинна</p>
      <p>А второй блок скрыт с помощью свойства display</p>
    </div>

    <div class="" v-show="!seen">
      <p>Этот блок не виден, так как переменная "seen" - ложна</p>
      <p>К нему добавлен атрибут style="display: none;"</p>
    </div>


    <h3>Директива v-for (массив)</h3>
    <div>
      <p>Список студентов:</p>
      <ol>
        <li v-for="fruit in fruits">{{ fruit }}</li>
      </ol>
    </div>

    <h3>Директива v-for (массив объектов)</h3>
    <p>Список студентов:</p>
    <table class="table">
      <thead>
      <tr>
        <th>ФИО</th>
        <th>Дата рождения</th>
        <th>Пол</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="student in students">
        <td>{{ student.fio }}</td>
        <td>{{ student.birth }}</td>
        <td>{{ student.sex }}</td>
      </tr>
      </tbody>
    </table>

    <h3>Директива v-bind</h3>
    <div>
      <img v-bind:src="bind_img" alt="Картинка" width="300">
      <br />
      <input width="300" type="text" :value="bind_value" disabled>
    </div>

    <h3>Директива v-on</h3>
    <div class="">
      <button v-on:click="click_green" class="btn btn-success">Кнопка 1</button>
      <button @click="click_red" class="btn btn-danger m-1">Кнопка 2</button>
    </div>




  </section>
</template>


<style scoped>
  input {
    width: 300px;
  }
  table{
    width: 50%;
  }
  h3{
    margin-top: 70px;
  }
</style>


<script>
  export default {
    // Переменные
    data() {
      return {
        message: 'Приветствую вас на курсы по изучению фреймворка Vue3!',
        login: null,
        seen: true,
        fruits: ["Яблоко", "Груша", "Мурад", "Банан", "Папайя"],
        students: [
            {
              fio: "Евсеев Дмитрий Витальевич",
              birth: '04.11.2005',
              sex: 'Мужской',
            },
            {
              fio: "Зубенко Михаил Петрович",
              birth: '12.12.2012',
              sex: 'Мужской',
            },
            {
              fio: "Елизавета Шейкина Григорьевна",
              birth: '05.05.2005',
              sex: 'Мужской',
            }
        ],

        bind_img: "https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg",
        bind_value: "Милый котик",

      }
    },
    //Методы
    methods: {
      click_green() {
        alert("Вы нажали зеленую кнопку");
      },
      click_red() {
        alert("Вы нажали красную кнопку");
      },


    }
  }
</script>


