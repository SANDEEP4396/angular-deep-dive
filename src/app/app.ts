import { Component } from '@angular/core';
import { Header } from "./header/header";
import { ServerStatus } from "./dashboard/server-status/server-status";
import { TrafficStatus } from "./dashboard/traffic/traffic";
import { Tickets } from "./dashboard/tickets/tickets";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [Header, ServerStatus, TrafficStatus, Tickets],
})
export class App {  
}
