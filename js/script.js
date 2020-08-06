
var Internet = [
      {
        "setPrice1" : 1,
        "setPrice2" : 100,
        "monthPrice" : 900
      },
      {
        "setPrice1" : 1,
        "setPrice2" : 100,
        "monthPrice" : 1000
      },
      {
        "setPrice1" : 1,
        "setPrice2" : 100,
        "monthPrice" : 1300
      },
      {
        "setPrice1" : 1,
        "setPrice2" : 100,
        "monthPrice" : 1700
      }
  ];
var Telephone = [
      {
        "setPrice1" : 72,
        "setPrice2" : 2700,
        "monthPrice" : 241
      }
  ];
var Iptv = [
      {
        "setPrice" : 0,
        "routerPrice" : 3500,
        "monthPrice" : 180
      }
  ];

var Internet_gift = [
      {
        "setPrice1" : 1,
        "monthPrice" : 500
      },
      {
        "setPrice1" : 100,
        "monthPrice" : 500
      }
  ];

// Очистка чекбоксов после перезагрузки страницы
for (i=0; i < document.getElementsByClassName('checks').length; i++) {
  if (document.getElementsByClassName('checks')[i].type=="checkbox") {
    document.getElementsByClassName('checks')[i].checked=false;
  }
};


$(document).ready(function(){

  navlinkStyle();

  //Применяем слайдер, если возможно ко всем услугам (сейчас их 4)
  for (var i = 0; i < 4; i++) {
    triggerSlickSlider(i);
  };

  // Обновление чекбоксов после закрытия модального блока с тарифами
  $('.close').click(function() {
    $('.checker').prop("checked", false);
    $('input#tab1').prop("checked", true);
  });
  $('.close2').click(function() {
    $('.checker').prop("checked", false);
    $('input#tab1').prop("checked", true);
  });


  //Калькулятор обычных тарифов:
  for (var i = 0; i < Internet.length; i++) {
    getPriceInt('#'+i+'tarifBoxInt', i);
  };
  for (var i = 0; i < Telephone.length; i++) {
    getPriceTel('#'+i+'tarifBoxTel', i);
  };
  for (var i = 0; i < Iptv.length; i++) {
    getPriceIPTV('#'+i+'tarifBoxIPTV', i);
  };

  //Калькулятор акционных тарифов:
  for (var i = 0; i < Internet_gift.length; i++) {
    getPriceIntGift('#'+i+'tarifBoxIntGift', i);
  };

  // Всплывающие сообщения по клику акций или сервисов
  $('button.alert-btn-gifts').click(function() {
    alert("Переход на описание акции в формате .pdf");
  });
  $('button.alert-btn-service').click(function() {
    alert("Переход на запуск сервиса или описание в зависимости от бизнес-процессов сервиса");
  });
  $('a.document-links').click(function() {
    alert("Переход на текст документа в формате .doc или .pdf");
  });
  $('button.alert-btn-pay').click(function() {
    alert("Переход на страницу оплаты платежной системы");
  });

});

// Функция по тарифам Интернет
function getPriceInt(box, i) {
  $('' + box + '').click(function(){
    var totalSetPrice1 = Internet[i].setPrice1;
    var totalSetPrice2 = Internet[i].setPrice2;
    var stringDisplay = "";
    var totalRouterPrice = 0;
    var totalMonthPrice = Internet[i].monthPrice;
    var totalOncePriceAll = 0;
    var totalMonthPriceAll = 0;

    $('h6.script_headerText').text('Куда Вам надо подключить услуги?');
    $('ul.script_ul').html(`
    <li class="nav-item">
      <label class="tes" for="tab1" style="box-shadow: 0px 2px 0px 0px #17A2B8; color: black;">В квартиру</label>
    </li>
    <li class="nav-item">
      <label class="tes" for="tab2">В частный дом</label>
    </li>`);
    $('h6.script_headerText').css({
      'font-style': 'normal'
    });
    $('ul.script_ul').css({
      'width': '70%'
    });

    $('section.script_section').html(`

    <!-- Left half -->
    <!-- Tab1 -->
    <div class="tab1 p-0 pt-3" style="width: 60%;">

      <!-- В тариф входит -->

      <h6 class="text-left mt-3 mb-3 font-italic">В тариф входит</h6>
      <div class="text-left price-text align-items-center d-flex">
        <span>Интернет по технологии ETTH (или xPON) до&nbsp;</span>
        <span class="internetSpeed"></span>
        <span>&nbsp;Мбит/с</span>
        <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
      </div>
      <div class="text-left price-text align-items-center d-flex">
        <span>Подключение по акции за 1 рубль!</span>
        <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
      </div>
      <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
        <span>Гибкая техподдержка</span>
        <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
      </div>

      <!-- Дополнительно к тарифу -->

      <h6 class="text-left mt-3 mb-3 font-italic">Выберите дополнительно к тарифу</h6>

      <!-- Router -->
      <div class="p-0">
        <a class="btn" data-toggle="collapse" data-target="#collapseTarifRouter" 
        aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
          <img src="./images/content/tarif_cards/router.png"/>
          <span class="p-3">Wi-Fi роутер</span>
          <span class="fa fa-chevron-down ml-3"></span>
        </a>
      </div>
      
      <div class="collapse" id="collapseTarifRouter">
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Wi-Fi роутер по полной стоимости за 4100 руб.</span>
            <input id="router" data-price="руб." type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="4100">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Wi-Fi роутер в рассрочку за 684 руб/мес. на 6 месяцев</span>
            <input id="router" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="684">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Wi-Fi роутер в рассрочку за 342 руб/мес. на 12 месяцев</span>
            <input id="router" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="342">
          </div>
        </div>
      </div> 

      <!-- IP-TV услуга -->
      <div class="p-0">
        <a class="btn" data-toggle="collapse" data-target="#collapseTarifIP-TV" 
        aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
          <img src="./images/content/tarif_cards/ip-tv.png"/>
          <span class="p-3">Домашнее телевидение</span> 
          <span class="fa fa-chevron-down ml-3"></span>
        </a>
      </div>
      
      <div class="collapse" id="collapseTarifIP-TV">
        <div class="p-3">
          <p>Домашнее онлайн-телевидение от 150 каналов, в том числе ГРТК Тыва, Тува 24, 
          Новый Век, Оvaa TV</p>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Пакет каналов "Базовый" за 180 руб/мес.</span>
            <input id="iptv" data-iptv='main' data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" data-toggle="collapse" data-target="#collapseTarifIP-TV_erotic" 
            name="internet" data-exval="180">
          </div>
        </div>
        <div class="p-3 collapse" id="collapseTarifIP-TV_erotic">
          <div class="p-0">
            <p>Управляйте просмотром и не пропускайте интересные фильмы и передачи</p>
            <p>Перематывайте рекламу</p>
            <p>Ставьте передачи на паузу</p>
            <p>Смотрите фильмы и телешоу до 7 дней после выхода их в эфир</p>
          </div>
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>+ сервис "отложенный просмотр" за 0 руб/мес.</span>
            <input type="checkbox" class="checker tarif_checker ml-auto" 
            name="" disabled="disabled" checked>
          </div>
        </div>
        <div class="p-3 collapse" id="collapseTarifIP-TV_erotic">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Дополнительный Пакет "Пикантный" за 70 руб/мес.</span>
            <input id="iptv" data-iptv='ero' data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="70" disabled="disabled">
          </div>
        </div>
      </div>

      <!-- IP-TV приставка -->
      <div class="p-0">
        <a class="btn" data-toggle="collapse" data-target="#collapseTarifIP-TV_box" 
        aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
          <img src="./images/content/tarif_cards/ip-tv_box.png"/>
          <span class="p-3">IPTV приставка</span> 
          <span class="fa fa-chevron-down ml-3"></span>
        </a>
      </div>
      
      <div class="collapse" id="collapseTarifIP-TV_box">
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>IPTV приставка по полной стоимости за 3900 руб.</span>
            <input id="iptv_box" data-price="руб." type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="3900">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>IPTV приставка в рассрочку за 650 руб/мес. на 6 месяцев</span>
            <input id="iptv_box" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="650">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>IPTV приставка в рассрочку за 325 руб/мес. на 12 месяцев</span>
            <input id="iptv_box" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="325">
          </div>
        </div>
      </div>

      <!-- Антивирус -->
      <div class="p-0">
        <a class="btn" data-toggle="collapse" data-target="#collapseTarifAV" 
        aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
          <img src="./images/content/tarif_cards/antivirus.png"/>
          <span class="p-3">Антивирус</span> 
          <span class="fa fa-chevron-down ml-3"></span>
        </a>
      </div>
      
      <div class="collapse" id="collapseTarifAV">
        <!-- Kaspersky -->
        <div class="pl-3 media">
          <img src="./images/content/tarif_cards/kasper.png" class="mr-3"/>
          <div class="media-body p-0">
            <h6 class="mt-0">Kaspersky Antivirus на одно устройство ПК</h6>
            <p class="m-0">Защита компьютера с ОС Windows от основных видов интернет-угроз.</p>
            <a class="btn btn-link p-0" data-toggle="collapse" href="#collapseKasper" 
            role="button" aria-expanded="false" aria-controls="collapseExample">Подробнее</a>
            <div class="collapse" id="collapseKasper">
              <ul style="list-style-type: circle !important; display: block;" class="pl-3">
                <li>Защита от вредоносных программ</li>
                <li>Проверка репутации программ</li>
                <li>Модуль проверки ссылок</li>
                <li>Высокая скорость работы</li>
              </ul>
              <h6 class="font-weight-bold m-0 pt-3">Системные требования:</h6>
              <span>Windows 10, 8.1, 8, 7</span>
              <h6 class="font-weight-bold m-0 pt-3">Технические требования:</h6>
              <ul style="list-style-type: circle !important; display: block;" class="pl-3">
                <li>Интернет-соединение</li>
                <li>Оперативная память: минимум 1 ГБ</li>
                <li>Пространство на диске: минимум 1500 МБ</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Годовая лицензия за 1188 руб.</span>
            <input id="AV" data-price="руб." type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="1188">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Лицензия за 99 руб/мес.</span>
            <input id="AV" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="99">
          </div>
        </div>
        <!-- Dr Web -->
        <div class="pl-3 media">
          <img src="./images/content/tarif_cards/drweb.png" class="mr-3"/>
          <div class="media-body p-0">
            <h6 class="mt-0">Dr. Web Премиум</h6>
            <p class="m-0">Лицензионная защита на 1 компьютер</p>
            <p class="m-0">Подписка на Android в подарок</p>
            <a class="btn btn-link p-0" data-toggle="collapse" href="#collapseDrWeb" 
            role="button" aria-expanded="false" aria-controls="collapseExample">Подробнее</a>
            <div class="collapse" id="collapseDrWeb">
              <ul style="list-style-type: circle !important; display: block;" class="pl-3">
                <li>Защита от вредоносных программ</li>
                <li>Защита онлайн-платежей</li>
                <li>Функция "Родительский контроль"</li>
              </ul>
              <h6 class="font-weight-bold m-0 pt-3">Системные требования:</h6>
              <span>Windows 10, 8.1, 8, 7, Vista, XP</span><br>
              <span>Windows Server</span><br>
              <span>macOS 10.7+</span><br>
              <span>macOS Server 10.8+</span><br>
              <span>Linux ядро 2.6.37 и выше</span><br>
              <span>Android 4.0+</span>
              <h6 class="font-weight-bold m-0 pt-3">Технические требования:</h6>
              <ul style="list-style-type: circle !important; display: block;" class="pl-3">
                <li>Интернет-соединение</li>
                <li>Оперативная память: минимум 1 ГБ</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Годовая лицензия за 1068 руб.</span>
            <input id="AV" data-price="руб." type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="1068">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Лицензия за 89 руб/мес.</span>
            <input id="AV" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="89">
          </div>
        </div>
      </div>

      <!-- Видеонаблюдение -->
      <div class="p-0">
        <a class="btn" data-toggle="collapse" data-target="#collapseTarifCamera" 
        aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
          <img src="./images/content/tarif_cards/camera.png"/>
          <span class="p-3">Видеонаблюдение</span> 
          <span class="fa fa-chevron-down ml-3"></span>
        </a>
      </div>
      
      <div class="collapse" id="collapseTarifCamera">
        <div class="p-3">
          <p>Широкоугольная Wi-Fi HD камера. Фиксация звука и движения.</p>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Подключить за 1000 руб/мес.</span>
            <input id="camera" data-price="руб/мес" type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="1000">
          </div>
        </div>
      </div>

    </div>

    <!-- Tab2 -->
    <div class="tab2 p-0 pt-3" style="width: 60%;">
      
      <!-- В тариф входит -->

      <h6 class="text-left mt-3 mb-3 font-italic">В тариф входит</h6>
      <div class="text-left price-text align-items-center d-flex">
        <span>Интернет по технологии xPON (или xDSL) до&nbsp;</span>
        <span class="internetSpeed"></span>
        <span>&nbsp;Мбит/с</span>
        <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
      </div>
      <div class="text-left price-text align-items-center d-flex">
        <span>Подключение по акции за 100 рублей!</span>
        <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
      </div>
      <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
        <span>Гибкая техподдержка</span>
        <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
      </div>

      <!-- Дополнительно к тарифу -->

      <h6 class="text-left mt-3 mb-3 font-italic">Выберите дополнительно к тарифу</h6>

      <!-- Router -->
      <div class="p-0">
        <a class="btn" data-toggle="collapse" data-target="#collapseTarifRouter" 
        aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
          <img src="./images/content/tarif_cards/router.png"/>
          <span class="p-3">Wi-Fi роутер</span>
          <span class="fa fa-chevron-down ml-3"></span>
        </a>
      </div>
      
      <div class="collapse" id="collapseTarifRouter">
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Wi-Fi роутер по полной стоимости за 4100 руб.</span>
            <input id="router" data-price="руб." type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="4100">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Wi-Fi роутер в рассрочку за 684 руб/мес. на 6 месяцев</span>
            <input id="router" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="684">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Wi-Fi роутер в рассрочку за 342 руб/мес. на 12 месяцев</span>
            <input id="router" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="342">
          </div>
        </div>
      </div> 

      <!-- IP-TV услуга -->
      <div class="p-0">
        <a class="btn" data-toggle="collapse" data-target="#collapseTarifIP-TV" 
        aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
          <img src="./images/content/tarif_cards/ip-tv.png"/>
          <span class="p-3">Домашнее телевидение</span> 
          <span class="fa fa-chevron-down ml-3"></span>
        </a>
      </div>
      
      <div class="collapse" id="collapseTarifIP-TV">
        <div class="p-3">
          <p>Домашнее онлайн-телевидение от 150 каналов, в том числе ГРТК Тыва, Тува 24, 
          Новый Век, Оvaa TV</p>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Пакет каналов "Базовый" за 180 руб/мес.</span>
            <input id="iptv" data-iptv='main' data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" data-toggle="collapse" data-target="#collapseTarifIP-TV_erotic" 
            name="internet" data-exval="180">
          </div>
        </div>
        <div class="p-3 collapse" id="collapseTarifIP-TV_erotic">
          <div class="p-0">
            <p>Управляйте просмотром и не пропускайте интересные фильмы и передачи</p>
            <p>Перематывайте рекламу</p>
            <p>Ставьте передачи на паузу</p>
            <p>Смотрите фильмы и телешоу до 7 дней после выхода их в эфир</p>
          </div>
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>+ сервис "отложенный просмотр" за 0 руб/мес.</span>
            <input type="checkbox" class="checker tarif_checker ml-auto" 
            name="" disabled="disabled" checked>
          </div>
        </div>
        <div class="p-3 collapse" id="collapseTarifIP-TV_erotic">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Дополнительный Пакет "Пикантный" за 70 руб/мес.</span>
            <input id="iptv" data-iptv='ero' data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="70" disabled="disabled">
          </div>
        </div>
      </div>

      <!-- IP-TV приставка -->
      <div class="p-0">
        <a class="btn" data-toggle="collapse" data-target="#collapseTarifIP-TV_box" 
        aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
          <img src="./images/content/tarif_cards/ip-tv_box.png"/>
          <span class="p-3">IPTV приставка</span> 
          <span class="fa fa-chevron-down ml-3"></span>
        </a>
      </div>
      
      <div class="collapse" id="collapseTarifIP-TV_box">
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>IPTV приставка по полной стоимости за 3900 руб.</span>
            <input id="iptv_box" data-price="руб." type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="3900">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>IPTV приставка в рассрочку за 650 руб/мес. на 6 месяцев</span>
            <input id="iptv_box" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="650">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>IPTV приставка в рассрочку за 325 руб/мес. на 12 месяцев</span>
            <input id="iptv_box" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="325">
          </div>
        </div>
      </div>

      <!-- Антивирус -->
      <div class="p-0">
        <a class="btn" data-toggle="collapse" data-target="#collapseTarifAV" 
        aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
          <img src="./images/content/tarif_cards/antivirus.png"/>
          <span class="p-3">Антивирус</span> 
          <span class="fa fa-chevron-down ml-3"></span>
        </a>
      </div>
      
      <div class="collapse" id="collapseTarifAV">
        <!-- Kaspersky -->
        <div class="pl-3 media">
          <img src="./images/content/tarif_cards/kasper.png" class="mr-3"/>
          <div class="media-body p-0">
            <h6 class="mt-0">Kaspersky Antivirus на одно устройство ПК</h6>
            <p class="m-0">Защита компьютера с ОС Windows от основных видов интернет-угроз.</p>
            <a class="btn btn-link p-0" data-toggle="collapse" href="#collapseKasper" 
            role="button" aria-expanded="false" aria-controls="collapseExample">Подробнее</a>
            <div class="collapse" id="collapseKasper">
              <ul style="list-style-type: circle !important; display: block;" class="pl-3">
                <li>Защита от вредоносных программ</li>
                <li>Проверка репутации программ</li>
                <li>Модуль проверки ссылок</li>
                <li>Высокая скорость работы</li>
              </ul>
              <h6 class="font-weight-bold m-0 pt-3">Системные требования:</h6>
              <span>Windows 10, 8.1, 8, 7</span>
              <h6 class="font-weight-bold m-0 pt-3">Технические требования:</h6>
              <ul style="list-style-type: circle !important; display: block;" class="pl-3">
                <li>Интернет-соединение</li>
                <li>Оперативная память: минимум 1 ГБ</li>
                <li>Пространство на диске: минимум 1500 МБ</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Годовая лицензия за 1188 руб.</span>
            <input id="AV" data-price="руб." type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="1188">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Лицензия за 99 руб/мес.</span>
            <input id="AV" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="99">
          </div>
        </div>
        <!-- Dr Web -->
        <div class="pl-3 media">
          <img src="./images/content/tarif_cards/drweb.png" class="mr-3"/>
          <div class="media-body p-0">
            <h6 class="mt-0">Dr. Web Премиум</h6>
            <p class="m-0">Лицензионная защита на 1 компьютер</p>
            <p class="m-0">Подписка на Android в подарок</p>
            <a class="btn btn-link p-0" data-toggle="collapse" href="#collapseDrWeb" 
            role="button" aria-expanded="false" aria-controls="collapseExample">Подробнее</a>
            <div class="collapse" id="collapseDrWeb">
              <ul style="list-style-type: circle !important; display: block;" class="pl-3">
                <li>Защита от вредоносных программ</li>
                <li>Защита онлайн-платежей</li>
                <li>Функция "Родительский контроль"</li>
              </ul>
              <h6 class="font-weight-bold m-0 pt-3">Системные требования:</h6>
              <span>Windows 10, 8.1, 8, 7, Vista, XP</span><br>
              <span>Windows Server</span><br>
              <span>macOS 10.7+</span><br>
              <span>macOS Server 10.8+</span><br>
              <span>Linux ядро 2.6.37 и выше</span><br>
              <span>Android 4.0+</span>
              <h6 class="font-weight-bold m-0 pt-3">Технические требования:</h6>
              <ul style="list-style-type: circle !important; display: block;" class="pl-3">
                <li>Интернет-соединение</li>
                <li>Оперативная память: минимум 1 ГБ</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Годовая лицензия за 1068 руб.</span>
            <input id="AV" data-price="руб." type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="1068">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Лицензия за 89 руб/мес.</span>
            <input id="AV" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="89">
          </div>
        </div>
      </div>

      <!-- Видеонаблюдение -->
      <div class="p-0">
        <a class="btn" data-toggle="collapse" data-target="#collapseTarifCamera" 
        aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
          <img src="./images/content/tarif_cards/camera.png"/>
          <span class="p-3">Видеонаблюдение</span> 
          <span class="fa fa-chevron-down ml-3"></span>
        </a>
      </div>
      
      <div class="collapse" id="collapseTarifCamera">
        <div class="p-3">
          <p>Широкоугольная Wi-Fi HD камера. Фиксация звука и движения.</p>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Подключить за 1000 руб/мес.</span>
            <input id="camera" data-price="руб/мес" type="checkbox" 
            class="checker tarif_checker ml-auto" name="internet" data-exval="1000">
          </div>
        </div>
      </div>
  
    </div>

    <!-- Right half -->
    <div class="ml-auto modal-tarif-options-right-part">
      <div class="d-flex flex-column p-0 modal-payment-block">
        <div id="modalPrices" class="d-flex flex-column flex-grow-1">
          <h5 class="modal-title pt-3">Платежи:</h5>
          <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1">
            <span class="price-text">Подключение</span>
            <span class="priceInt1 tab1 ml-auto price-text"></span>
            <span class="priceInt2 tab2 ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          </div>
          <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1 displayRouter">
          </div>
          <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1 displayIPTV_box">
          </div>
          <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1 displayIPTV">
          </div>
          <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1 displayAV">
          </div>
          <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1 displayCamera">
          </div>
          <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1">
            <span class="price-text">Интернет</span>
            <span class="price3 ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          </div>

          <!-- Итоговые суммы -->
          <h5 class="modal-title pt-3">Всего к оплате</h5>
          <div class="p-0 d-flex flex-row flex-grow1">
            <span class="price-text">Единовременная плата</span>
            <span class="oncePrice ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          </div>
          <div class="p-0 d-flex flex-row flex-grow1">
            <span class="price-text">Ежемесячная плата</span>
            <span class="monthlyPrice ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          </div>
        </div>
        <div>
          <button type="button" class="btn btn-outline-dark close2 w-100" data-dismiss="modal" 
          data-toggle="modal" data-target="#staticBackdrop1">Оставить заявку</button>
        </div>
      </div>
    </div>`);
    
    // Top-border for "Итого к оплате"
    $('.modal-tarif-options-right-part').css({
      'border-top':'2px solid #dee2e6'
    });

    // Стилизация кнопок выбора "кваритра/частный дом"
    $('.tes').click(function() {
      $('.tes').css('box-shadow', '0px 2px 0px 0px #DEE2E6');
      $('.tes').css('color', '#708090');
      $(this).css('box-shadow', '0px 2px 0px 0px #17A2B8');
      $(this).css('color', 'black');
    });


    // Приведение чекбоксов к начальному состоянию при смене pct-tab
    $('input[name="pct"]').click(function(){
      $(`input[name="internet"]:checked`).each(function () {
        $(this).prop('checked',false).trigger('change');
      });
      $('.collapse').collapse('hide');
    });

    // Приведение выбора "квартира/дом" к начальному состоянию при перезагрузке страницы
    $('input[id="tab1"]').prop('checked',false).each(function () {
      $(this).prop('checked', true);
    });

    // Реакция на чекбокс "Роутер"
    $('input[id="router"]').change(function(){
      totalRouterPrice = 0;
      stringDisplayRouter = "";
      
      if ($(this).is(":checked")) {
        $('input[id="router"]').prop('checked', false);
        $(this).prop('checked', true);
        exact_input = this;
        if ($(exact_input).data("price") == "руб.") {
          stringDisplayRouter = `
            <span class="price-text">Wi-Fi роутер</span>
            <span class="priceRouter ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
        } else if ($(exact_input).data("price") == "руб/мес") {
          stringDisplayRouter = `
            <span class="price-text">Wi-Fi роутер</span>
            <span class="priceRouter ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          `;
        };

        totalRouterPrice = parseInt($(this).data("exval"),10);
      };
      
      $('.displayRouter').html(stringDisplayRouter);
      $('#modalPrices .priceRouter').text(totalRouterPrice);
    });

    // Реакция на чекбокс "IPTV услуга"
    $('input[id="iptv"]').change(function(){
      totalIptvPrice = 0;
      stringDisplayIPTV = "";

      if ($('input[data-iptv="main"]').is(':checked')) {
        $('input[data-iptv="ero"]').prop('disabled', false);
        //Проверяем чекбокс основного пакета "Базовый"
        main = 'input[data-iptv="main"]';
        if ($(main).is(":checked")) {
          if ($(main).data("price") == "руб.") {
            stringDisplayIPTV = `
              <span class="price-text">IPTV телевидение</span>
              <span class="priceIPTV ml-auto price-text"></span>
              <span class="price-text ml-3">руб.</span>
            `;
          } else if ($(main).data("price") == "руб/мес") {
            stringDisplayIPTV = `
              <span class="price-text">IPTV телевидение</span>
              <span class="priceIPTV ml-auto price-text"></span>
              <span class="price-text ml-3">руб/мес</span>
            `;
          };

          totalIptvPrice = parseInt($(main).data("exval"),10);
        };
        // Проверяем чекбокс дополнительного пакета "Пикантный"
        erotic = 'input[data-iptv="ero"]';
        if ($(erotic).is(':checked')) {
          totalIptvPrice += parseInt($(erotic).data("exval"),10);
        };

      } else {
        $('input[data-iptv="ero"]').prop('checked', false);
        $('input[data-iptv="ero"]').prop('disabled', true);
      };
      
      $('.displayIPTV').html(stringDisplayIPTV);
      $('#modalPrices .priceIPTV').text(totalIptvPrice);
    });

    // Реакция на чекбокс "IPTV приставка"
    $('input[id="iptv_box"]').change(function(){
      totalIPTV_boxPrice = 0;
      stringDisplayIPTV_box = "";
      
      if ($(this).is(":checked")) {
        $('input[id="iptv_box"]').prop('checked', false);
        $(this).prop('checked', true);
        exact_input = this;
        if ($(exact_input).data("price") == "руб.") {
          stringDisplayIPTV_box = `
            <span class="price-text">IPTV приставка</span>
            <span class="priceIPTV_box ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
        } else if ($(exact_input).data("price") == "руб/мес") {
          stringDisplayIPTV_box = `
            <span class="price-text">IPTV приставка</span>
            <span class="priceIPTV_box ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          `;
        };

        totalIPTV_boxPrice = parseInt($(this).data("exval"),10);
      };
      
      $('.displayIPTV_box').html(stringDisplayIPTV_box);
      $('#modalPrices .priceIPTV_box').text(totalIPTV_boxPrice);
    });

    // Реакция на чекбокс "Антивирус"
    $('input[id="AV"]').change(function(){
      totalAVPrice = 0;
      stringDisplayAV = "";
      
      if ($(this).is(":checked")) {
        $('input[id="AV"]').prop('checked', false);
        $(this).prop('checked', true);
        exact_input = this;
        if ($(exact_input).data("price") == "руб.") {
          stringDisplayAV = `
            <span class="price-text">Антивирус</span>
            <span class="priceAV ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
        } else if ($(exact_input).data("price") == "руб/мес") {
          stringDisplayAV = `
            <span class="price-text">Антивирус</span>
            <span class="priceAV ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          `;
        };

        totalAVPrice = parseInt($(this).data("exval"),10);
      };
      
      $('.displayAV').html(stringDisplayAV);
      $('#modalPrices .priceAV').text(totalAVPrice);
    });

    // Реакция на чекбокс "Видеонаблюдение"
    $('input[id="camera"]').change(function(){
      totalCameraPrice = 0;
      stringDisplayCamera = "";
      
      if ($(this).is(":checked")) {
        $('input[id="camera"]').prop('checked', false);
        $(this).prop('checked', true);
        exact_input = this;
        if ($(exact_input).data("price") == "руб.") {
          stringDisplayCamera = `
            <span class="price-text">Видеонаблюдение</span>
            <span class="priceCamera ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
        } else if ($(exact_input).data("price") == "руб/мес") {
          stringDisplayCamera = `
            <span class="price-text">Видеонаблюдение</span>
            <span class="priceCamera ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          `;
        };

        totalCameraPrice = parseInt($(this).data("exval"),10);
      };
      
      $('.displayCamera').html(stringDisplayCamera);
      $('#modalPrices .priceCamera').text(totalCameraPrice);
    });

    // Определение скорости тарифа
    if (i == 0) {
      $('span.internetSpeed').text('10');
    }
    else if (i == 1) {
      $('span.internetSpeed').text('20');
    }
    else if (i == 2) {
      $('span.internetSpeed').text('40');
    } 
    else if (i == 3) {
      $('span.internetSpeed').text('100');
    };

    // Итоговые суммы оплаты
    $('#modalPrices .priceInt1').text(totalSetPrice1);
    $('#modalPrices .priceInt2').text(totalSetPrice2);
    $('#modalPrices .price3').text(totalMonthPrice);

    // Расчет единовременной и ежемесячной оплаты
    totalSums();
    $('input[name="pct"], input[name="internet"]').change(function () {
      totalOncePriceAll = 0;
      totalMonthPriceAll = 0;
      totalSums();
    });

    // Объявление функции расчета итоговых платежей
    function totalSums() {
      $('div .priceTypeChecker').each(function() {
        parent = this;
        if ($(':last-child', this).text() == "руб.") {
          j = 2;
          while (j < $(parent).children().length) {
            if ($(':nth-child('+ j +')', this).css('display') == 'block') {
              summ = parseInt($(':nth-child('+ j +')', this).text());
              totalOncePriceAll += summ;
            };
            j += 1;
          };
    
        } else if ($(':last-child', this).text() == "руб/мес") {
          j = 2;
          while (j < $(parent).children().length) {
            if ($(':nth-child('+ j +')', this).css('display') == 'block') {
              summ = parseInt($(':nth-child('+ j +')', this).text());
              totalMonthPriceAll += summ;
            };
            j += 1;
          };
        };

        $('#modalPrices .oncePrice').text(totalOncePriceAll);
        $('#modalPrices .monthlyPrice').text(totalMonthPriceAll);
      });
    };

  });

};

// Функция по тарифам Телефонии
function getPriceTel(box, i) {
  $('' + box + '').click(function(){
    var totalSetPrice1 = Telephone[i].setPrice1;
    var totalSetPrice2 = Telephone[i].setPrice2;
    var stringDisplay = "";
    var totalTelephonePrice = 0;
    var totalMonthPrice = Telephone[i].monthPrice;
    var totalOncePriceAll = 0;
    var totalMonthPriceAll = 0;

    $('h6.script_headerText').text('У Вас телефонизированное помещение?');
    $('ul.script_ul').html(`
    <li class="nav-item">
      <label class="tes" for="tab1" style="box-shadow: 0px 2px 0px 0px #17A2B8; color: black;">Да, телефонная проводка проведена</label>
    </li>
    <li class="nav-item">
      <label class="tes" for="tab2">Нет, телефонная проводка не проведена</label>
    </li>`);
    $('h6.script_headerText').css({
      'font-style': 'normal'
    });
    $('ul.script_ul').css({
      'width': '70%'
    });

    $('section.script_section').html(`

    <!-- Left half -->
    <!-- Tab1 -->
    <div class="tab1 p-0 pt-3" style="width: 60%;">

      <!-- В тариф входит -->

      <h6 class="text-left mt-3 mb-3 font-italic">В тариф входит</h6>
      <div class="text-left price-text align-items-center d-flex">
        <span>Домашняя телефония</span>
        <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
      </div>
      <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
        <span>Подключение за 72 рубля</span>
        <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
      </div>

      <!-- Дополнительно к тарифу -->

      <h6 class="text-left mt-3 mb-3 font-italic">Выберите дополнительно к тарифу</h6>

      <!-- Телефонный аппарат -->
      <div class="p-0">
        <a class="btn" data-toggle="collapse" data-target="#collapseTarifRouter" 
        aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
          <img src="./images/content/tarif_cards/phone.png"/>
          <span class="p-3">Телефонный аппарат</span>
          <span class="fa fa-chevron-down ml-3"></span>
        </a>
      </div>
      
      <div class="collapse" id="collapseTarifRouter">
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Телефонный аппарат по полной стоимости за 510 рублей</span>
            <input id="router" data-price="руб." type="checkbox" 
            class="checker tarif_checker ml-auto" name="telephone" data-exval="510">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Телефонный аппарат в рассрочку за 85 руб/мес. на 6 месяцев</span>
            <input id="router" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="telephone" data-exval="85">
          </div>
        </div>
      </div> 

    </div>

    <!-- Tab2 -->
    <div class="tab2 p-0 pt-3" style="width: 60%;">
      
      <!-- В тариф входит -->

      <h6 class="text-left mt-3 mb-3 font-italic">В тариф входит</h6>
      <div class="text-left price-text align-items-center d-flex">
        <span>Домашняя телефония</span>
        <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
      </div>
      <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
        <span>Подключение за 2700 рублей</span>
        <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
      </div>

      <!-- Дополнительно к тарифу -->

      <h6 class="text-left mt-3 mb-3 font-italic">Выберите дополнительно к тарифу</h6>

      <!-- Телефонный аппарат -->
      <div class="p-0">
        <a class="btn" data-toggle="collapse" data-target="#collapseTarifRouter" 
        aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
          <img src="./images/content/tarif_cards/phone.png"/>
          <span class="p-3">Телефонный аппарат</span>
          <span class="fa fa-chevron-down ml-3"></span>
        </a>
      </div>
      
      <div class="collapse" id="collapseTarifRouter">
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Телефонный аппарат по полной стоимости за 510 рублей</span>
            <input id="router" data-price="руб." type="checkbox" 
            class="checker tarif_checker ml-auto" name="telephone" data-exval="510">
          </div>
        </div>
        <div class="p-3">
          <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
            <span>Телефонный аппарат в рассрочку за 85 руб/мес. на 6 месяцев</span>
            <input id="router" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="telephone" data-exval="85">
          </div>
        </div>
      </div> 
  
    </div>

    <!-- Right half -->
    <div class="ml-auto modal-tarif-options-right-part">
      <div class="d-flex flex-column p-0 modal-payment-block">
        <div id="modalPrices" class="d-flex flex-column flex-grow-1">
          <h5 class="modal-title pt-3">Платежи:</h5>
          <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1">
            <span class="price-text">Подключение</span>
            <span class="priceTel1 tab1 ml-auto price-text"></span>
            <span class="priceTel2 tab2 ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          </div>
          <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1 displayRouter">
          </div>
          <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1">
            <span class="price-text">Телефония</span>
            <span class="price3 ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          </div>

          <!-- Итоговые суммы -->
          <h5 class="modal-title pt-3">Всего к оплате</h5>
          <div class="p-0 d-flex flex-row flex-grow1">
            <span class="price-text">Единовременная плата</span>
            <span class="oncePrice ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          </div>
          <div class="p-0 d-flex flex-row flex-grow1">
            <span class="price-text">Ежемесячная плата</span>
            <span class="monthlyPrice ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          </div>
        </div>
        <div>
          <button type="button" class="btn btn-outline-dark close2 w-100" data-dismiss="modal" 
          data-toggle="modal" data-target="#staticBackdrop1">Оставить заявку</button>
        </div>
      </div>
    </div>`);

    // Top-border for "Итого к оплате"
    $('.modal-tarif-options-right-part').css({
      'border-top':'2px solid #dee2e6'
    });

    // Стилизация кнопок выбора "да/нет"
    $('.tes').click(function() {
      $('.tes').css('box-shadow', '0px 2px 0px 0px #DEE2E6');
      $('.tes').css('color', '#708090');
      $(this).css('box-shadow', '0px 2px 0px 0px #17A2B8');
      $(this).css('color', 'black');
    });


    // Приведение чекбоксов к начальному состоянию при смене pct-tab
    $('input[name="pct"]').click(function(){
      $(`input[name="telephone"]:checked`).each(function () {
        $(this).prop('checked',false).trigger('change');
      });
      $('.collapse').collapse('hide');
    });

    // Приведение выбора "да/нет" к начальному состоянию при перезагрузке страницы
    $('input[id="tab1"]').prop('checked',false).each(function () {
      $(this).prop('checked', true);
    });

    // Реакция на чекбокс "Телефонный аппарат"
    $('input[id="router"]').change(function(){
      totalRouterPrice = 0;
      stringDisplayRouter = "";
      
      if ($(this).is(":checked")) {
        $('input[id="router"]').prop('checked', false);
        $(this).prop('checked', true);
        exact_input = this;
        if ($(exact_input).data("price") == "руб.") {
          stringDisplayRouter = `
            <span class="price-text">Тел. аппарат</span>
            <span class="priceRouter ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
        } else if ($(exact_input).data("price") == "руб/мес") {
          stringDisplayRouter = `
            <span class="price-text">Тел. аппарат</span>
            <span class="priceRouter ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          `;
        };

        totalRouterPrice = parseInt($(this).data("exval"),10);
      };
      
      $('.displayRouter').html(stringDisplayRouter);
      $('#modalPrices .priceRouter').text(totalRouterPrice);
    });

    // Итоговые суммы оплаты
    $('#modalPrices .priceTel1').text(totalSetPrice1);
    $('#modalPrices .priceTel2').text(totalSetPrice2);
    $('#modalPrices .price3').text(totalMonthPrice);

    // Расчет единовременной и ежемесячной оплаты
    totalSums();
    $('input[name="pct"], input[name="telephone"]').change(function () {
      totalOncePriceAll = 0;
      totalMonthPriceAll = 0;
      totalSums();
    });

    // Объявление функции расчета итоговых платежей
    function totalSums() {
      $('div .priceTypeChecker').each(function() {
        parent = this;
        if ($(':last-child', this).text() == "руб.") {
          j = 2;
          while (j < $(parent).children().length) {
            if ($(':nth-child('+ j +')', this).css('display') == 'block') {
              summ = parseInt($(':nth-child('+ j +')', this).text());
              totalOncePriceAll += summ;
            };
            j += 1;
          };
    
        } else if ($(':last-child', this).text() == "руб/мес") {
          j = 2;
          while (j < $(parent).children().length) {
            if ($(':nth-child('+ j +')', this).css('display') == 'block') {
              summ = parseInt($(':nth-child('+ j +')', this).text());
              totalMonthPriceAll += summ;
            };
            j += 1;
          };
        };

        $('#modalPrices .oncePrice').text(totalOncePriceAll);
        $('#modalPrices .monthlyPrice').text(totalMonthPriceAll);
      });
    };
  });
};

// Функция по тарифам IPTV
function getPriceIPTV(box, i) {
  $('' + box + '').click(function(){
    var totalSetPrice = Iptv[i].setPrice;
    var totalMonthPrice = Iptv[i].monthPrice;
    var totalRouterPrice = 0;
    var stringDisplay = "";
    var totalOncePriceAll = 0;
    var totalMonthPriceAll = 0;

    $('h6.script_headerText').html(`Домашнее телевидение IP-TV доступно только для 
      абонентов Интернет от Тывасвязьинформ`);
    $('ul.script_ul').html(``);

    $('section.script_section').html(`

      <!-- Left half -->
      <div class="tab1 p-0 pt-3" style="width: 60%;">

        <!-- В тариф входит -->

        <h6 class="text-left mt-3 mb-3 font-italic">В тариф входит</h6>
        <div class="text-left price-text align-items-center d-flex">
          <p>
            <span>Домашнее онлайн-телевидение от 150 каналов, в том числе</span><br>
            <span>ГРТК Тыва, Тува 24, Новый Век, Оvaa TV</span>
          </p>
          <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
        </div>
        <div class="text-left price-text align-items-center d-flex">
          <span>Подключение по акции за 0 рублей!</span>
          <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
        </div>
        <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
          <span>Гибкая техподдержка</span>
          <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
        </div>
        <div class="text-left price-text align-items-left d-flex flex-column modal-tarif-checker">
          <div class="p-0">
            <p>Управляйте просмотром и не пропускайте интересные фильмы и передачи</p>
            <p>Перематывайте рекламу</p>
            <p>Ставьте передачи на паузу</p>
            <p>Смотрите фильмы и телешоу до 7 дней после выхода их в эфир</p>
          </div>
          <div class="text-left price-text align-items-center d-flex p-0">
            <span>Сервис "отложенный просмотр" за 0 руб/мес.</span>
            <input type="checkbox" class="checker tarif_checker ml-auto" 
            name="" disabled="disabled" checked>
          </div>
        </div>

        <!-- Дополнительно к тарифу -->

        <h6 class="text-left mt-3 mb-3 font-italic">Выберите дополнительно к тарифу</h6>

        <!-- IP-TV доп. пакет -->
        <div class="text-left price-text align-items-center d-flex p-3">
          <img src="./images/content/tarif_cards/ip-tv.png"/>
          <span class="p-3">Дополнительный Пакет "Пикантный" за 70 руб/мес.</span> 
          <input id="iptv_erotic" data-price='руб/мес' type="checkbox" 
            class="checker tarif_checker ml-auto" name="ip-tv" data-exval="70">
        </div>

        <!-- IP-TV приставка -->
        <div class="p-0">
          <a class="btn" data-toggle="collapse" data-target="#collapseTarifIP-TV_box" 
          aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
            <img src="./images/content/tarif_cards/ip-tv_box.png"/>
            <span class="p-3">IPTV приставка</span> 
            <span class="fa fa-chevron-down ml-3"></span>
          </a>
        </div>
        
        <div class="collapse" id="collapseTarifIP-TV_box">
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>IPTV приставка по полной стоимости за 3900 руб.</span>
              <input id="iptv_box" data-price="руб." type="checkbox" 
              class="checker tarif_checker ml-auto" name="ip-tv" data-exval="3900">
            </div>
          </div>
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>IPTV приставка в рассрочку за 650 руб/мес. на 6 месяцев</span>
              <input id="iptv_box" data-price='руб/мес' type="checkbox" 
              class="checker tarif_checker ml-auto" name="ip-tv" data-exval="650">
            </div>
          </div>
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>IPTV приставка в рассрочку за 325 руб/мес. на 12 месяцев</span>
              <input id="iptv_box" data-price='руб/мес' type="checkbox" 
              class="checker tarif_checker ml-auto" name="ip-tv" data-exval="325">
            </div>
          </div>
        </div>

      </div>

      <!-- Right half -->
      <div class="ml-auto modal-tarif-options-right-part">
        <div class="d-flex flex-column p-0 modal-payment-block">
          <div id="modalPrices" class="d-flex flex-column flex-grow-1">
            <h5 class="modal-title pt-3">Платежи:</h5>
            <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1">
              <span class="price-text">Подключение</span>
              <span class="priceIPTV_set ml-auto price-text"></span>
              <span class="price-text ml-3">руб.</span>
            </div>
            <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1 displayIPTV_ero">
            </div>
            <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1 displayIPTV_box">
            </div>
            <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1">
              <span class="price-text">IPTV телевидение</span>
              <span class="price3 ml-auto price-text"></span>
              <span class="price-text ml-3">руб/мес</span>
            </div>

            <!-- Итоговые суммы -->
            <h5 class="modal-title pt-3">Всего к оплате</h5>
            <div class="p-0 d-flex flex-row flex-grow1">
              <span class="price-text">Единовременная плата</span>
              <span class="oncePrice ml-auto price-text"></span>
              <span class="price-text ml-3">руб.</span>
            </div>
            <div class="p-0 d-flex flex-row flex-grow1">
              <span class="price-text">Ежемесячная плата</span>
              <span class="monthlyPrice ml-auto price-text"></span>
              <span class="price-text ml-3">руб/мес</span>
            </div>
          </div>
          <div>
            <button type="button" class="btn btn-outline-dark close2 w-100" data-dismiss="modal" 
            data-toggle="modal" data-target="#staticBackdrop1">Оставить заявку</button>
          </div>
        </div>
      </div>
      `);

    // Реакция на чекбокс "IPTV приставка"
    $('input[id="iptv_box"]').change(function(){
      totalIPTV_boxPrice = 0;
      stringDisplayIPTV_box = "";
      
      if ($(this).is(":checked")) {
        $('input[id="iptv_box"]').prop('checked', false);
        $(this).prop('checked', true);
        exact_input = this;
        if ($(exact_input).data("price") == "руб.") {
          stringDisplayIPTV_box = `
            <span class="price-text">IPTV приставка</span>
            <span class="priceIPTV_box ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
        } else if ($(exact_input).data("price") == "руб/мес") {
          stringDisplayIPTV_box = `
            <span class="price-text">IPTV приставка</span>
            <span class="priceIPTV_box ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          `;
        };

        totalIPTV_boxPrice = parseInt($(this).data("exval"),10);
      };
      
      $('.displayIPTV_box').html(stringDisplayIPTV_box);
      $('#modalPrices .priceIPTV_box').text(totalIPTV_boxPrice);
    });

    // Реакция на чекбокс "IPTV доп. пакет"
    $('input[id="iptv_erotic"]').change(function(){
      totalIptvEroPrice = 0;
      stringDisplayIPTV_ero = "";

      if ($('input[id="iptv_erotic"]').is(":checked")) {
        if ($(this).data("price") == "руб.") {
          stringDisplayIPTV_ero = `
            <span class="price-text">Пакет каналов "Пикантный"</span>
            <span class="priceIPTV_ero ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
        } else if ($(this).data("price") == "руб/мес") {
          stringDisplayIPTV_ero = `
            <span class="price-text">Пакет каналов "Пикантный"</span>
            <span class="priceIPTV_ero ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          `;
        };

        totalIptvEroPrice = parseInt($(this).data("exval"),10);
      };
      
      $('.displayIPTV_ero').html(stringDisplayIPTV_ero);
      $('#modalPrices .priceIPTV_ero').text(totalIptvEroPrice);
    });

    // Итоговые суммы оплаты
    $('#modalPrices .priceIPTV_set').text(totalSetPrice);
    $('#modalPrices .price3').text(totalMonthPrice);

    // Расчет единовременной и ежемесячной оплаты
    totalSums();
    $('input[name="pct"], input[name="ip-tv"]').change(function () {
      totalOncePriceAll = 0;
      totalMonthPriceAll = 0;
      totalSums();
    });

    // Объявление функции расчета итоговых платежей
    function totalSums() {
      $('div .priceTypeChecker').each(function() {
        parent = this;
        if ($(':last-child', this).text() == "руб.") {
          j = 2;
          while (j < $(parent).children().length) {
            if ($(':nth-child('+ j +')', this).css('display') == 'block') {
              summ = parseInt($(':nth-child('+ j +')', this).text());
              totalOncePriceAll += summ;
            };
            j += 1;
          };
    
        } else if ($(':last-child', this).text() == "руб/мес") {
          j = 2;
          while (j < $(parent).children().length) {
            if ($(':nth-child('+ j +')', this).css('display') == 'block') {
              summ = parseInt($(':nth-child('+ j +')', this).text());
              totalMonthPriceAll += summ;
            };
            j += 1;
          };
        };

        $('#modalPrices .oncePrice').text(totalOncePriceAll);
        $('#modalPrices .monthlyPrice').text(totalMonthPriceAll);
      });
    };

  });
};

// Функция по акционным тарифам Интернет
function getPriceIntGift(box, i) {
  $('' + box + '').click(function(){

    var totalSetPrice1 = Internet_gift[i].setPrice1;
    var stringDisplay = "";
    var totalRouterPrice = 0;
    var totalMonthPrice = Internet_gift[i].monthPrice;
    var totalOncePriceAll = 0;
    var totalMonthPriceAll = 0;

    $('ul.script_ul').html(``);

    if (i == 0) {
      $('h6.script_headerText').html(`Данный акционный тариф действителен только для 
        подключения в многоквартирные дома.`);
    } else if (i == 1) {
      $('h6.script_headerText').html(`Данный акционный тариф действителен только для 
        подключения в частные дома.`);
      $('h6.script_headerText').css({
        'font-style': 'italic'
      });
    };
    $('h6.script_headerText').css({
      'font-style': 'italic'
    });

    $('section.script_section').html(`

      <!-- Left half -->
      <div class="tab1 p-0 pt-3" style="width: 60%;">

        <!-- В тариф входит -->

        <h6 class="text-left mt-3 mb-3 font-italic">В тариф входит</h6>
        <div class="IntGiftText1 text-left price-text align-items-center d-flex">
        </div>
        <div class="IntGiftText2 text-left price-text align-items-center d-flex">
        </div>
        <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
          <span>Гибкая техподдержка</span>
          <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
        </div>
        <div class="p-0">
          <button class="btn btn-link link-btn-style p-0 m-0" data-toggle="collapse" data-target="#collapseGiftText" 
          aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
            <span>Подробнее об условиях акции (раскрыть)</span>
          </button>

          <div class="collapse" id="collapseGiftText">
            <p class="IntGiftText3">
            </p>
          </div>
        </div>

        <!-- Дополнительно к тарифу -->

        <h6 class="text-left mt-3 mb-3 font-italic">Выберите дополнительно к тарифу</h6>

        <!-- Router -->
        <div class="p-0">
          <a class="btn" data-toggle="collapse" data-target="#collapseTarifRouter" 
          aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
            <img src="./images/content/tarif_cards/router.png"/>
            <span class="p-3">Wi-Fi роутер</span>
            <span class="fa fa-chevron-down ml-3"></span>
          </a>
        </div>
        
        <div class="collapse" id="collapseTarifRouter">
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>Wi-Fi роутер по полной стоимости за 4100 руб.</span>
              <input id="router" data-price="руб." type="checkbox" 
              class="checker tarif_checker ml-auto" name="internet" data-exval="4100">
            </div>
          </div>
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>Wi-Fi роутер в рассрочку за 684 руб/мес. на 6 месяцев</span>
              <input id="router" data-price='руб/мес' type="checkbox" 
              class="checker tarif_checker ml-auto" name="internet" data-exval="684">
            </div>
          </div>
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>Wi-Fi роутер в рассрочку за 342 руб/мес. на 12 месяцев</span>
              <input id="router" data-price='руб/мес' type="checkbox" 
              class="checker tarif_checker ml-auto" name="internet" data-exval="342">
            </div>
          </div>
        </div> 

        <!-- IP-TV услуга -->
        <div class="p-0">
          <a class="btn" data-toggle="collapse" data-target="#collapseTarifIP-TV" 
          aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
            <img src="./images/content/tarif_cards/ip-tv.png"/>
            <span class="p-3">Домашнее телевидение</span> 
            <span class="fa fa-chevron-down ml-3"></span>
          </a>
        </div>
        
        <div class="collapse" id="collapseTarifIP-TV">
          <div class="p-3">
            <p>Домашнее онлайн-телевидение от 150 каналов, в том числе ГРТК Тыва, Тува 24, 
            Новый Век, Оvaa TV</p>
          </div>
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>Пакет каналов "Базовый" за 180 руб/мес.</span>
              <input id="iptv" data-iptv='main' data-price='руб/мес' type="checkbox" 
              class="checker tarif_checker ml-auto" data-toggle="collapse" data-target="#collapseTarifIP-TV_erotic" 
              name="internet" data-exval="180">
            </div>
          </div>
          <div class="p-3 collapse" id="collapseTarifIP-TV_erotic">
            <div class="p-0">
              <p>Управляйте просмотром и не пропускайте интересные фильмы и передачи</p>
              <p>Перематывайте рекламу</p>
              <p>Ставьте передачи на паузу</p>
              <p>Смотрите фильмы и телешоу до 7 дней после выхода их в эфир</p>
            </div>
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>+ сервис "отложенный просмотр" за 0 руб/мес.</span>
              <input type="checkbox" class="checker tarif_checker ml-auto" 
              name="" disabled="disabled" checked>
            </div>
          </div>
          <div class="p-3 collapse" id="collapseTarifIP-TV_erotic">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>Дополнительный Пакет "Пикантный" за 70 руб/мес.</span>
              <input id="iptv" data-iptv='ero' data-price='руб/мес' type="checkbox" 
              class="checker tarif_checker ml-auto" name="internet" data-exval="70" disabled="disabled">
            </div>
          </div>
        </div>

        <!-- IP-TV приставка -->
        <div class="p-0">
          <a class="btn" data-toggle="collapse" data-target="#collapseTarifIP-TV_box" 
          aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
            <img src="./images/content/tarif_cards/ip-tv_box.png"/>
            <span class="p-3">IPTV приставка</span> 
            <span class="fa fa-chevron-down ml-3"></span>
          </a>
        </div>
        
        <div class="collapse" id="collapseTarifIP-TV_box">
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>IPTV приставка по полной стоимости за 3900 руб.</span>
              <input id="iptv_box" data-price="руб." type="checkbox" 
              class="checker tarif_checker ml-auto" name="internet" data-exval="3900">
            </div>
          </div>
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>IPTV приставка в рассрочку за 650 руб/мес. на 6 месяцев</span>
              <input id="iptv_box" data-price='руб/мес' type="checkbox" 
              class="checker tarif_checker ml-auto" name="internet" data-exval="650">
            </div>
          </div>
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>IPTV приставка в рассрочку за 325 руб/мес. на 12 месяцев</span>
              <input id="iptv_box" data-price='руб/мес' type="checkbox" 
              class="checker tarif_checker ml-auto" name="internet" data-exval="325">
            </div>
          </div>
        </div>

        <!-- Антивирус -->
        <div class="p-0">
          <a class="btn" data-toggle="collapse" data-target="#collapseTarifAV" 
          aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
            <img src="./images/content/tarif_cards/antivirus.png"/>
            <span class="p-3">Антивирус</span> 
            <span class="fa fa-chevron-down ml-3"></span>
          </a>
        </div>
        
        <div class="collapse" id="collapseTarifAV">
          <!-- Kaspersky -->
          <div class="pl-3 media">
            <img src="./images/content/tarif_cards/kasper.png" class="mr-3"/>
            <div class="media-body p-0">
              <h6 class="mt-0">Kaspersky Antivirus на одно устройство ПК</h6>
              <p class="m-0">Защита компьютера с ОС Windows от основных видов интернет-угроз.</p>
              <a class="btn btn-link p-0" data-toggle="collapse" href="#collapseKasper" 
              role="button" aria-expanded="false" aria-controls="collapseExample">Подробнее</a>
              <div class="collapse" id="collapseKasper">
                <ul style="list-style-type: circle !important; display: block;" class="pl-3">
                  <li>Защита от вредоносных программ</li>
                  <li>Проверка репутации программ</li>
                  <li>Модуль проверки ссылок</li>
                  <li>Высокая скорость работы</li>
                </ul>
                <h6 class="font-weight-bold m-0 pt-3">Системные требования:</h6>
                <span>Windows 10, 8.1, 8, 7</span>
                <h6 class="font-weight-bold m-0 pt-3">Технические требования:</h6>
                <ul style="list-style-type: circle !important; display: block;" class="pl-3">
                  <li>Интернет-соединение</li>
                  <li>Оперативная память: минимум 1 ГБ</li>
                  <li>Пространство на диске: минимум 1500 МБ</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>Годовая лицензия за 1188 руб.</span>
              <input id="AV" data-price="руб." type="checkbox" 
              class="checker tarif_checker ml-auto" name="internet" data-exval="1188">
            </div>
          </div>
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>Лицензия за 99 руб/мес.</span>
              <input id="AV" data-price='руб/мес' type="checkbox" 
              class="checker tarif_checker ml-auto" name="internet" data-exval="99">
            </div>
          </div>
          <!-- Dr Web -->
          <div class="pl-3 media">
            <img src="./images/content/tarif_cards/drweb.png" class="mr-3"/>
            <div class="media-body p-0">
              <h6 class="mt-0">Dr. Web Премиум</h6>
              <p class="m-0">Лицензионная защита на 1 компьютер</p>
              <p class="m-0">Подписка на Android в подарок</p>
              <a class="btn btn-link p-0" data-toggle="collapse" href="#collapseDrWeb" 
              role="button" aria-expanded="false" aria-controls="collapseExample">Подробнее</a>
              <div class="collapse" id="collapseDrWeb">
                <ul style="list-style-type: circle !important; display: block;" class="pl-3">
                  <li>Защита от вредоносных программ</li>
                  <li>Защита онлайн-платежей</li>
                  <li>Функция "Родительский контроль"</li>
                </ul>
                <h6 class="font-weight-bold m-0 pt-3">Системные требования:</h6>
                <span>Windows 10, 8.1, 8, 7, Vista, XP</span><br>
                <span>Windows Server</span><br>
                <span>macOS 10.7+</span><br>
                <span>macOS Server 10.8+</span><br>
                <span>Linux ядро 2.6.37 и выше</span><br>
                <span>Android 4.0+</span>
                <h6 class="font-weight-bold m-0 pt-3">Технические требования:</h6>
                <ul style="list-style-type: circle !important; display: block;" class="pl-3">
                  <li>Интернет-соединение</li>
                  <li>Оперативная память: минимум 1 ГБ</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>Годовая лицензия за 1068 руб.</span>
              <input id="AV" data-price="руб." type="checkbox" 
              class="checker tarif_checker ml-auto" name="internet" data-exval="1068">
            </div>
          </div>
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>Лицензия за 89 руб/мес.</span>
              <input id="AV" data-price='руб/мес' type="checkbox" 
              class="checker tarif_checker ml-auto" name="internet" data-exval="89">
            </div>
          </div>
        </div>

        <!-- Видеонаблюдение -->
        <div class="p-0">
          <a class="btn" data-toggle="collapse" data-target="#collapseTarifCamera" 
          aria-expanded="false" aria-controls="collapseExample" style="padding: 1rem 1rem !important;">
            <img src="./images/content/tarif_cards/camera.png"/>
            <span class="p-3">Видеонаблюдение</span> 
            <span class="fa fa-chevron-down ml-3"></span>
          </a>
        </div>
        
        <div class="collapse" id="collapseTarifCamera">
          <div class="p-3">
            <p>Широкоугольная Wi-Fi HD камера. Фиксация звука и движения.</p>
          </div>
          <div class="p-3">
            <div class="text-left price-text align-items-center d-flex modal-tarif-checker">
              <span>Подключить за 1000 руб/мес.</span>
              <input id="camera" data-price="руб/мес" type="checkbox" 
              class="checker tarif_checker ml-auto" name="internet" data-exval="1000">
            </div>
          </div>
        </div>

      </div>

      <!-- Right half -->
      <div class="ml-auto modal-tarif-options-right-part">
        <div class="d-flex flex-column p-0 modal-payment-block">
          <div id="modalPrices" class="d-flex flex-column flex-grow-1">
            <div class="modal-gift-date-counter align-self-start">
              <p>До конца акции осталось</p>
              <p>14 дней</p>
            </div>
            <h5 class="modal-title pt-3">Платежи:</h5>
            <div class="getSetIntGiftPrice priceTypeChecker p-0 d-flex flex-row flex-grow1">
              <span class="price-text">Подключение</span>
              <span class="priceInt1 ml-auto price-text"></span>
              <span class="price-text ml-3">руб.</span>
            </div>
            <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1 displayRouter">
            </div>
            <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1 displayIPTV_box">
            </div>
            <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1 displayIPTV">
            </div>
            <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1 displayAV">
            </div>
            <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1 displayCamera">
            </div>
            <div class="priceTypeChecker p-0 d-flex flex-row flex-grow1">
              <span class="price-text">Интернет</span>
              <span class="price3 ml-auto price-text"></span>
              <span class="price-text ml-3">руб/мес</span>
            </div>

            <!-- Итоговые суммы -->
            <h5 class="modal-title pt-3">Всего к оплате</h5>
            <div class="p-0 d-flex flex-row flex-grow1">
              <span class="price-text">Единовременная плата</span>
              <span class="oncePrice ml-auto price-text"></span>
              <span class="price-text ml-3">руб.</span>
            </div>
            <div class="p-0 d-flex flex-row flex-grow1">
              <span class="price-text">Ежемесячная плата</span>
              <span class="monthlyPrice ml-auto price-text"></span>
              <span class="price-text ml-3">руб/мес</span>
            </div>
          </div>
          <div>
            <button type="button" class="btn btn-outline-dark close2 w-100" data-dismiss="modal" 
            data-toggle="modal" data-target="#staticBackdrop1">Оставить заявку</button>
          </div>
        </div>
      </div>`);

    // Блок "В тариф входит" для квартиры и дома
    if (i == 0) {
      $('div.IntGiftText1').html(`
          <span>Интернет по технологии ETTH (или xPON) до&nbsp;</span>
          <span class="internetSpeed"></span>
          <span>&nbsp;Мбит/с</span>
          <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
        `);
      $('div.IntGiftText2').html(`
          <span>Подключение по акции за 1 рубль!</span>
          <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
        `);
      $('p.IntGiftText3').html(`
          <h6 class="text-center font-weight-bold">Положение о порядке проведения акции 
          «Для многоквартирных домов»</h6>
          <h6 class="text-left font-weight-bold">Определения</h6>
          <ul style="list-style-type: circle !important; display: block;">
            <li>«Акция» - акция «Для многоквартирных домов».</li>
            <li>«Базовые тарифы» – тарифы на услуги связи АО «Тывасвязьинформ» 
            (Далее по тексту – Организатор), действующие для всех абонентов и размещенные 
            на официальном сайте Организатора по адресу: www.tuva.ru.</li>
            <li>«Абонент» - физическое лицо, с которым заключается договор на организацию доступа к сети 
            Интернет в рамках данной Акции.</li>
            <li>«Организация доступа к сети Интернет» – организация доступа к широкополосному 
            порту для подключающегося абонента при наличии технической 
            возможности по базовым тарифам.</li>
          </ul>
          <h6 class="text-left font-weight-bold mt-3">Основные положения</h6>
          <ul style="list-style-type: circle !important; display: block;">
            <li>Наименование акции – «Для многоквартирных домов».</li>
            <li>Участие в Акции подразумевает возможность подключения к тарифному 
            плану «Мега-промо» со скоростью доступа к сети Интернет до 100 Мбит/с 
            на промо-период. Абонентская плата в течение промо-периода составляет 500 рублей в месяц.</li>
            <li>В течение промо-периода либо после его окончания абонент может сменить 
            тарифный план на любой другой действующий тарифный план. После окончания 
            промо-периода происходит автоматический перевод на действующие условия тарифного 
            плана «Мега» с абонентской платой 1500 рублей.</li>
          </ul>
          <h6 class="text-left font-weight-bold mt-3">Условия проведения акции</h6>
          <ul style="list-style-type: circle !important; display: block;">
            <li class="">
              Для участия в акции необходимо:
              <ol>
                <li>Обратиться в офисы продаж Организатора. </li>
                <li>Проверить наличие технической возможности на предоставление 
                доступа к сети Интернет по технологии ETTH или xPON.</li>
                <li>При наличии технической возможности заключить договор на организацию 
                доступа к сети Интернет (Далее по тексту – Договор).</li>
              </ol>
            </li>
            <li>После окончания промо-периода происходит автоматический перевод на 
            действующие условия тарифного плана «Мега» с абонентской платой 1500 рублей в месяц. 
            В течение промо-периода либо после его окончания абонент может сменить тарифный план 
            на любой другой действующий тарифный план.</li>
            <li>Акция распространяется только на новых абонентов-физических лиц сети Интернет.</li>
            <li>Абонент может одновременно воспользоваться акциями «Для многоквартирных домов» и 
            «Подключи Интернет за 1 рубль».</li>
          </ul>
        `);
    } else if (i == 1) {
      $('div.IntGiftText1').html(`
          <span>Интернет по технологии xPON до&nbsp;</span>
          <span class="internetSpeed"></span>
          <span>&nbsp;Мбит/с</span>
          <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
        `);
      $('div.IntGiftText2').html(`
          <span>Подключение по акции за 100 рублей!</span>
          <input type="checkbox" class="checker tarif_checker ml-auto" name="" disabled="disabled" checked>
        `);
      $('p.IntGiftText3').html(`
          <h6 class="text-center font-weight-bold">Положение о порядке проведения акции 
          «GPON в частный дом».</h6>
          <h6 class="text-left font-weight-bold">Определения</h6>
          <ul style="list-style-type: circle !important; display: block;">
            <li>«Акция» - акция «Для многоквартирных домов».</li>
            <li>«Базовые тарифы» – тарифы на услуги связи АО «Тывасвязьинформ» 
            (Далее по тексту – Организатор), действующие для всех абонентов и размещенные 
            на официальном сайте Организатора по адресу: www.tuva.ru.</li>
            <li>«Абонент» - физическое лицо, с которым заключается договор на организацию доступа к сети 
            Интернет в рамках данной Акции.</li>
            <li>«Организация доступа к сети Интернет» – организация доступа к широкополосному 
            порту для подключающегося абонента при наличии технической 
            возможности по базовым тарифам.</li>
          </ul>
          <h6 class="text-left font-weight-bold mt-3">Основные положения</h6>
          <ul style="list-style-type: circle !important; display: block;">
            <li>Наименование акции – «GPON в частный дом».</li>
            <li>
              Участие в акции подразумевает:
              <ol>
                <li>Организацию доступа к сети Интернет по технологии хPON 
                в частных жилых домах для физических лиц при наличии технической 
                возможности за 100 рублей с учетом НДС.</li>
                <li>Переключение абонентов-физических лиц, проживающих в частных жилых 
                домах с технологии ADSL на xPON при наличии технической возможности за 100 
                рублей с учетом НДС.</li>
                <li>2.4.3 Возможность подключения к тарифному плану «Мега-промо» со скоростью 
                доступа к сети Интернет до 100 Мбит/с на промо-период. Абонентская плата в течение 
                промо-периода составляет 500 рублей в месяц.</li>
              </ol>
            </li>
            <li>В течение промо-периода либо после его окончания абонент может сменить 
            тарифный план на любой другой действующий тарифный план. После окончания промо-периода 
            происходит автоматический перевод на действующие условия тарифного плана «Мега» с 
            абонентской платой    1 500,0 рублей в месяц.</li>
          </ul>
          <h6 class="text-left font-weight-bold mt-3">Условия проведения акции</h6>
          <ul style="list-style-type: circle !important; display: block;">
            <li class="">
              Для участия в акции необходимо:
              <ol>
                <li>Обратиться в офисы продаж Организатора. </li>
                <li>Проверить наличие технической возможности на предоставление 
                доступа к сети Интернет по технологии xPON.</li>
                <li>При наличии технической возможности заключить договор на организацию 
                доступа к сети Интернет (Далее по тексту – Договор) или написать заявление 
                на переключение c технологии ADSL на xPON.</li>
                <li>Приобрести пользовательское (оконечное) оборудование самостоятельно в 
                офисах продаж Организатора акции либо у сторонних организаций.</li>
              </ol>
            </li>
            <li>После окончания промо-периода происходит автоматический перевод на действующие 
            условия тарифного плана «Мега» с абонентской платой 1500 рублей. В течение промо-периода 
            либо после его окончания абонент может сменить тарифный план на любой другой действующий 
            тарифный план.</li>
          </ul>
        `);
    };

    // Реакция на чекбокс "Роутер"
    $('input[id="router"]').change(function(){
      totalRouterPrice = 0;
      stringDisplayRouter = "";
      
      if ($(this).is(":checked")) {
        $('input[id="router"]').prop('checked', false);
        $(this).prop('checked', true);
        exact_input = this;
        if ($(exact_input).data("price") == "руб.") {
          stringDisplayRouter = `
            <span class="price-text">Wi-Fi роутер</span>
            <span class="priceRouter ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
        } else if ($(exact_input).data("price") == "руб/мес") {
          stringDisplayRouter = `
            <span class="price-text">Wi-Fi роутер</span>
            <span class="priceRouter ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          `;
        };

        totalRouterPrice = parseInt($(this).data("exval"),10);
      };
      
      $('.displayRouter').html(stringDisplayRouter);
      $('#modalPrices .priceRouter').text(totalRouterPrice);
    });

    // Реакция на чекбокс "IPTV услуга"
    $('input[id="iptv"]').change(function(){
      totalIptvPrice = 0;
      stringDisplayIPTV = "";

      if ($('input[data-iptv="main"]').is(':checked')) {
        $('input[data-iptv="ero"]').prop('disabled', false);
        //Проверяем чекбокс основного пакета "Базовый"
        main = 'input[data-iptv="main"]';
        if ($(main).is(":checked")) {
          if ($(main).data("price") == "руб.") {
            stringDisplayIPTV = `
              <span class="price-text">IPTV телевидение</span>
              <span class="priceIPTV ml-auto price-text"></span>
              <span class="price-text ml-3">руб.</span>
            `;
          } else if ($(main).data("price") == "руб/мес") {
            stringDisplayIPTV = `
              <span class="price-text">IPTV телевидение</span>
              <span class="priceIPTV ml-auto price-text"></span>
              <span class="price-text ml-3">руб/мес</span>
            `;
          };

          totalIptvPrice = parseInt($(main).data("exval"),10);
        };
        // Проверяем чекбокс дополнительного пакета "Пикантный"
        erotic = 'input[data-iptv="ero"]';
        if ($(erotic).is(':checked')) {
          totalIptvPrice += parseInt($(erotic).data("exval"),10);
        };

      } else {
        $('input[data-iptv="ero"]').prop('checked', false);
        $('input[data-iptv="ero"]').prop('disabled', true);
      };
      
      $('.displayIPTV').html(stringDisplayIPTV);
      $('#modalPrices .priceIPTV').text(totalIptvPrice);
    });

    // Реакция на чекбокс "IPTV приставка"
    $('input[id="iptv_box"]').change(function(){
      totalIPTV_boxPrice = 0;
      stringDisplayIPTV_box = "";
      
      if ($(this).is(":checked")) {
        $('input[id="iptv_box"]').prop('checked', false);
        $(this).prop('checked', true);
        exact_input = this;
        if ($(exact_input).data("price") == "руб.") {
          stringDisplayIPTV_box = `
            <span class="price-text">IPTV приставка</span>
            <span class="priceIPTV_box ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
        } else if ($(exact_input).data("price") == "руб/мес") {
          stringDisplayIPTV_box = `
            <span class="price-text">IPTV приставка</span>
            <span class="priceIPTV_box ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          `;
        };

        totalIPTV_boxPrice = parseInt($(this).data("exval"),10);
      };
      
      $('.displayIPTV_box').html(stringDisplayIPTV_box);
      $('#modalPrices .priceIPTV_box').text(totalIPTV_boxPrice);
    });

    // Реакция на чекбокс "Антивирус"
    $('input[id="AV"]').change(function(){
      totalAVPrice = 0;
      stringDisplayAV = "";
      
      if ($(this).is(":checked")) {
        $('input[id="AV"]').prop('checked', false);
        $(this).prop('checked', true);
        exact_input = this;
        if ($(exact_input).data("price") == "руб.") {
          stringDisplayAV = `
            <span class="price-text">Антивирус</span>
            <span class="priceAV ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
        } else if ($(exact_input).data("price") == "руб/мес") {
          stringDisplayAV = `
            <span class="price-text">Антивирус</span>
            <span class="priceAV ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          `;
        };

        totalAVPrice = parseInt($(this).data("exval"),10);
      };
      
      $('.displayAV').html(stringDisplayAV);
      $('#modalPrices .priceAV').text(totalAVPrice);
    });

    // Реакция на чекбокс "Видеонаблюдение"
    $('input[id="camera"]').change(function(){
      totalCameraPrice = 0;
      stringDisplayCamera = "";
      
      if ($(this).is(":checked")) {
        $('input[id="camera"]').prop('checked', false);
        $(this).prop('checked', true);
        exact_input = this;
        if ($(exact_input).data("price") == "руб.") {
          stringDisplayCamera = `
            <span class="price-text">Видеонаблюдение</span>
            <span class="priceCamera ml-auto price-text"></span>
            <span class="price-text ml-3">руб.</span>
          `;
        } else if ($(exact_input).data("price") == "руб/мес") {
          stringDisplayCamera = `
            <span class="price-text">Видеонаблюдение</span>
            <span class="priceCamera ml-auto price-text"></span>
            <span class="price-text ml-3">руб/мес</span>
          `;
        };

        totalCameraPrice = parseInt($(this).data("exval"),10);
      };
      
      $('.displayCamera').html(stringDisplayCamera);
      $('#modalPrices .priceCamera').text(totalCameraPrice);
    });

    // Определение скорости тарифа
    if (i == 0) {
      $('span.internetSpeed').text('100');
    }
    else if (i == 1) {
      $('span.internetSpeed').text('100');
    };

    // Итоговые суммы оплаты
    $('#modalPrices .priceInt1').text(totalSetPrice1);
    $('#modalPrices .price3').text(totalMonthPrice);

    // Расчет единовременной и ежемесячной оплаты
    totalSums();
    $('input[name="pct"], input[name="internet"]').change(function () {
      totalOncePriceAll = 0;
      totalMonthPriceAll = 0;
      totalSums();
    });

    // Объявление функции расчета итоговых платежей
    function totalSums() {
      $('div .priceTypeChecker').each(function() {
        parent = this;
        if ($(':last-child', this).text() == "руб.") {
          j = 2;
          while (j < $(parent).children().length) {
            if ($(':nth-child('+ j +')', this).css('display') == 'block') {
              summ = parseInt($(':nth-child('+ j +')', this).text());
              totalOncePriceAll += summ;
            };
            j += 1;
          };
    
        } else if ($(':last-child', this).text() == "руб/мес") {
          j = 2;
          while (j < $(parent).children().length) {
            if ($(':nth-child('+ j +')', this).css('display') == 'block') {
              summ = parseInt($(':nth-child('+ j +')', this).text());
              totalMonthPriceAll += summ;
            };
            j += 1;
          };
        };

        $('#modalPrices .oncePrice').text(totalOncePriceAll);
        $('#modalPrices .monthlyPrice').text(totalMonthPriceAll);
      });
    };
  
  });
};


function triggerSlickSlider(i) {
  // Active tab trigger (Интернет)
  is_active = $('.'+ i +'tab-slider').parent().is('.active');
  if (is_active) {
    activeTab_childs_number = $('.'+ i +'tab-slider').children('.tarif-card-trigger').length;
    if (activeTab_childs_number > 4) {
        $('.'+ i +'tab-slider').slick({
          dots: false,
          infinite: false,
          speed: 700,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
    };
  };

  // Hidden tab trigger (Все остальные)
  $('#'+ i +'tab-slider-trigger').click(function() { 
    
    passiveTab_childs_number = $('.'+ i +'tab-slider').children('.tarif-card-trigger').length;
    if (passiveTab_childs_number > 4) {
      setTimeout(function () {
        $('.'+ i +'tab-slider').slick({
          dots: false,
          infinite: false,
          speed: 700,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }, 200);
    }
  
  })
};


// Бокс-шэдоу на нав-линк выбора услуг тарифов
function navlinkStyle() {
  $('.content-tickets-item').click(function() {
    $('.content-tickets-item').css({
      'box-shadow': 'none'
    });
    $(this).css({
      'background-color': 'transparent',
      'border-color': 'transparent',
      'box-shadow': '0px 2px 0px 0px #17A2B8'
    });
  });
};


