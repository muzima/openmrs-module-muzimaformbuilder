import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'muzimaFormBuilderNGApp';
  searchText;
  forms = [
    {
      name: 'Form Name',
      description: 'a basic form',
      sections: []
    },
    {
      name: 'Registeration Form',
      description: 'simple registeration form',
      sections: []
    },
    {
      name: 'Encounter Form',
      description: 'first encounter form',
      sections: []
    },
    {
      name: 'Form Name',
      description: 'a basic form',
      sections: []
    },
    {
      name: 'Registeration Form',
      description: 'simple registeration form',
      sections: []
    },
    {
      name: 'Encounter Form',
      description: 'first encounter form',
      sections: []
    }
  ];
}
