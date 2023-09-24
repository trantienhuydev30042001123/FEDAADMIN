import {Component} from '@angular/core';
import {OrderDTO} from "../dto/OrderDTO";
import {productDTO} from "../dto/ProductDTO";
import {HelperService} from "../service/helper-service";
import {Router} from "@angular/router";
import {orderDetailsDTO} from "../dto/orderDetailsDTO";
import {DialogConfirm} from "../dialog-confirm/interfaces/DialogConfirm";
import {DialogConfirmComponent} from "../dialog-confirm/dialog-confirm.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orderDetails: orderDetailsDTO[] = [];
  order: OrderDTO[] = [];
  product: productDTO[] = [];
  userData: any;


  constructor(private router: Router,
              private helperService: HelperService,
              private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    const userString = localStorage.getItem('ID_Key');
    if (userString) {
      this.userData = JSON.parse(userString);
    }
    this.getListOrder();
    // this.getListOrderDetails();
  }

  public getListOrder(): void {
    this.helperService
      .getAll(
        "oder"
      )
      .then((res: any) => {
        this.order = res;
        console.log(res)
        for (let a of this.order) {
          let product1: productDTO[] = [];
          this.orderDetails = a.orderDetail;
          let product = this.orderDetails;
          product.forEach((item: any) => {
            product1.push(item.product);
            this.product = product1
          })
          let name = this.product;
          name.forEach((item: any) => {
            name.push(item.name);
          })
        }
      })
      .catch((error) => {
        console.log("loi")
      })
  }

  //
  // public getListOrderDetails(): void {
  //   this.helperService
  //     .getAll(
  //       "order/orderDetal"
  //     )
  //     .then((res: any) => {
  //       this.orderDetails = res;
  //     })
  //     .catch((error) => {
  //       console.log("loi")
  //     })
  // }

  getSizesToDisplay(sizes: number[]): string[] {
    const displaySizes: string[] = [];
    for (const size of sizes) {
      if (size === 0) {
        displaySizes.push('freesize');
      } else {
        displaySizes.push(size.toString());
      }
    }
    return displaySizes;
  }

  changeStatus(status: number): string {
    let beforeStatus: string = '';
    if (status == 0) {
      beforeStatus = 'Chờ xử lý';
    } else if (status == 1) {
      beforeStatus = 'Đã xử lí';
    } else if (status == 2) {
      beforeStatus = 'Đã giao hàng';
    } else {
      beforeStatus = 'Hủy';
    }
    console.log(beforeStatus)
    return beforeStatus;
  }

  formatDate(date: string): string {
    const formattedDate = new Date(date).toLocaleDateString('en-GB');
    return formattedDate;
  }

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN');
  }

  deleteOrder(id: number) {
    this.dialog.open(DialogConfirmComponent, {
      data: new DialogConfirm("Hủy đơn", "Bạn có chắc chắn hủy đơn này không ?", "warn"),
      disableClose: false,
      width: '350x'
    }).afterClosed().subscribe(result => {
      if (result === "Yes") {
        this.helperService
          .deleteOrder("oder", id)
          .then(() => {
            let mess = "Xoá Thành Công!";
            setTimeout(() => {
              this.getListOrder();
            }, 5); // Đợi 100ms trước khi gọi lại getListCart()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    });
  }

  updateStatus(id: number, status: number) {
    this.helperService
      .updateStatusOrder("oder", id, status)
      .then(() => {
        setTimeout(() => {
          this.getListOrder();
        }, 5); // Đợi 100ms trước khi gọi lại getListCart()
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
