import React, { useEffect } from "react";
import './css/Admin.css';
import { Bar, Doughnut } from 'react-chartjs-2';
import LoadingBox from "../components/subComponents/LoadingBox";
import MessageBox from "../components/subComponents/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { showPltOrder } from "../actions/orderActions";
import { showPlt } from "../actions/productActions";


export default function AdminScreen() {
  const pltShow = useSelector((state) => state.pltShow);
  const { loading, error, plt } = pltShow;
  const pltShowOrder = useSelector((state) => state.pltShowOrder);
  const { loading: loadingPltOrder, error: errorPltOrder, pltOrder } = pltShowOrder;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showPlt());
    dispatch(showPltOrder());
  }, [dispatch])

  return (
    <div>

      <div className="content">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger"> {error}</MessageBox>
        ) : (
          <div className="chart">
            <Doughnut
              data={{
                labels: plt ? plt.map((x) => (
                  x.category.categoryName
                )) : ('chiu'),
                datasets: [{
                  label: "Số lượng sản phẩm",
                  data: plt.map((x) => (
                    x.countProduct
                  )),
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',]
                }]
              }}
              height={400}
              width={600}
              options={{
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                }, title: {
                  display: true,
                  text: 'Biểu đồ thống kê sản phẩm'
                }
              }}
            />
          </div>
        )}
        <div>
          {loadingPltOrder ? (
            <LoadingBox></LoadingBox>
          ) : errorPltOrder ? (
            <MessageBox variant="danger"> {errorPltOrder}</MessageBox>
          ) : (
            <div className="chart">
              <Bar
                data={{
                  labels: pltOrder ? pltOrder.map((x) => (
                    x.orderDate
                  )) : ('chiu'),
                  datasets: [{
                    label: "Số lượng Đơn hàng",
                    data: pltOrder.map((x) => (
                      x.countOrder
                    )),
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',]
                  }]
                }}
                height={400}
                width={600}
                options={{
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  },
                  title: {
                    display: true,
                    text: 'Biểu đồ thống kê đơn hàng theo ngày'
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}