import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { balloonEffect, changeDivSize } from './animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    changeDivSize,
    balloonEffect,
    trigger(
      'fadeInOut',
      [
        state(
          "sample",
          style({
            opacity: 0
          })
        ),
        transition("sample <=> *", animate("1000ms"))
      ]
    ),
    trigger(
      "EnterLeave",
      [
        state(
          "flyIn",
          style({ transform: "translateX(0)" })
        ),
        transition(
          ":enter",
          [
            style({ transform: "translateX(-100%)" }),
            animate("0.5s 300ms ease-in")
          ]
        ),
        transition(
          ":leave",
          [
            animate("0.3s ease-out", style({ transform: "translateX(100%)" }))
          ]
        )
      ]
    )
  ]
})
export class AnimationComponent implements OnInit {

  public currentState: string;
  public currentStateOfBalloon: string;
  public listItem: any[];
  public list_order: number;
  constructor() {
    this.currentState = "initial";
    this.currentStateOfBalloon = "initial";
    this.listItem = [];
    this.list_order = 1;
  }

  ngOnInit(): void {
  }

  public changeState() {
    this.currentState = this.currentState === "initial" ? "final" : "initial";
  }

  public changeStateBalloon() {
    this.currentStateOfBalloon = this.currentStateOfBalloon === "initial" ? "final" : "initial";
  }
  public addItem(): void {
    var listitem = "ListItem " + this.list_order;
    this.list_order++;
    this.listItem.push(listitem);
  }
  public removeItem(): void {
    this.listItem.length -= 1;
  }
}
