import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public icon_name;
  public service_heading;
  public service_paragraph;
  public selectedTab;
  public service_obj = [
    {
      icon_name: 'pencil',
      service_heading: 'PCB Designing',
      service_paragraph: 'We are professional PCB Designer & PCB Fabricator. We accept the order of PCB Design Artwork and PCB Fabrication in Single Layer & Multi-Layer PCB, for Engineering E&TC, E&C, Electronic & Instrumentation, Electrical college level and Industrial level.',
    },
    {
      icon_name: 'object-ungroup',
      service_heading: 'Circuit Designing',
      service_paragraph: 'We are proud of our reputation as a quality electronics circuit designer and developer. We carry out applied research in the areas of Electronics & Communication, Electronics & Electrical Engg, Medical Electronics and Telecommunication.',
    },
    {
      icon_name: 'connectdevelop',
      service_heading: 'Embedded Programming',
      service_paragraph: 'Now a days, Application of Electronics and Embedded technology is the biggest and most emerging sector showing potential to open up more and more career opportunities for ITI, Diploma and Engineering. This will definitely enhance the career scopes.',
    },
    {
      icon_name: 'cogs',
      service_heading: 'Product Development',
      service_paragraph: 'We reduce the gap between the educational knowledge and the practical work field. We are here to cater the need of hard core electronics and embedded systems and infuse creative information into the mind set among new generations.',
    },
    {
      icon_name: 'laptop',
      service_heading: 'Hardware Designing',
      service_paragraph: 'We have extensive experience in analogue and digital design, components selections, purchasing and assembly. Also at Botz we do extensive testing procedures on prototypes, products for both standards and regulatory.',
    },
    {
      icon_name: 'code',
      service_heading: 'Software Designing',
      service_paragraph: 'We have extensive experience in designing and implementing real time embedded software.We prefer to design embedded software in UML, even if the code is to be implemented in languages that do not conform to the object oriented paradigm.',
    },
  ]
  constructor() { }

  ngOnInit() {
    this.serviceSelected(0);
  }

  serviceSelected(index) {
    this.selectedTab = index;
    this.icon_name = this.service_obj[index].icon_name;
    this.service_heading = this.service_obj[index].service_heading;
    this.service_paragraph = this.service_obj[index].service_paragraph;
  }

}
