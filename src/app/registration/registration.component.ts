import { Component, OnInit } from '@angular/core';
declare var jQuery :any;
declare var $ :any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  changeView(){
    $('.tab a').on('click', function (e) {
      e.preventDefault();      
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
      var target = $(this).attr('data-href');
      console.log(target);
      $('.tab-content > div').not(target).hide();
      $(target).fadeIn(600);
    });
  }
}
