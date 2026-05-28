import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styles: `
  
    :host {
      display: block;
      font-family: Arial, Helvetica, sans-serif;
    }

    body{
      background: #ffe5e5;
    }

    .container{
      width: 90%;
      max-width: 1100px;
      margin: 40px auto;
    }

    h1{
      text-align: center;
      margin-bottom: 30px;
      color: #b30000;
    }

    .formulario{
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }

    .formulario input{
      flex: 1;
      min-width: 220px;
      padding: 12px;
      border: 2px solid #ff4d4d;
      border-radius: 8px;
      outline: none;
    }

    .formulario button{
      padding: 12px 25px;
      background: #e60000;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    .productos{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .card{
      background: white;
      padding: 20px;
      border-radius: 10px;
      border-top: 6px solid #e60000;
      box-shadow: 0 3px 8px rgba(255,0,0,0.2);
    }

    .card h2{
      color: #b30000;
    }

    .alert{
      background: green;
      color: white;
      padding: 15px;
      border-radius: 8px;
      margin-top: 20px;
    }

    .pagination{
      display: flex;
      gap: 10px;
    }

    .dark-btn{
      background: black;
    }

    @media(max-width:768px){

      .formulario{
        flex-direction: column;
      }

      .productos{
        grid-template-columns: 1fr;
      }

    }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Form {
  title = 'tiendita';
}