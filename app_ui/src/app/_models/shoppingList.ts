import { Component, OnInit } from "@angular/core";

export class item {
    _id: String | undefined;
    item_title: String | undefined;
}

export class ShoppingList {
    _id!: String;
    title!: String;
    user_id!: any;
    items!: item[];
}