import React from "react";
import {
  WidgetLgContent,
  WidgetLgTitle,
  WidgetLgTable,
  WidgetLgTr,
  WidgetLgTh,
  WidgetLgUser,
  WidgetLgImg,
  WidgetLgName,
  WidgetLgDate,
  WidgetLgAmount,
  WidgetLgStatus,
  WidgetLgBtn,
} from "./WidgetLgStyled";

const WidgetLg = () => {
  const Btn  = ({type}) => {
    return <WidgetLgBtn type={type}>{type}</WidgetLgBtn>
  }
  return (
    <>
      <WidgetLgContent>
        <WidgetLgTitle>Latest Transections</WidgetLgTitle>
        <WidgetLgTable>
          <WidgetLgTr>
            <WidgetLgTh>Customer</WidgetLgTh>
            <WidgetLgTh>Date</WidgetLgTh>
            <WidgetLgTh>Amount</WidgetLgTh>
            <WidgetLgTh>Status</WidgetLgTh>
          </WidgetLgTr>
          <WidgetLgTr>
            <WidgetLgUser>
              <WidgetLgImg src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
              <WidgetLgName>Susan Carol</WidgetLgName>
            </WidgetLgUser>
            <WidgetLgDate>2 jun 2021</WidgetLgDate>
            <WidgetLgAmount>$122.00</WidgetLgAmount>
            <WidgetLgStatus>
              <Btn type='Aproved' />
            </WidgetLgStatus>
          </WidgetLgTr>
          <WidgetLgTr>
            <WidgetLgUser>
              <WidgetLgImg src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
              <WidgetLgName>Susan Carol</WidgetLgName>
            </WidgetLgUser>
            <WidgetLgDate>2 jun 2021</WidgetLgDate>
            <WidgetLgAmount>$122.00</WidgetLgAmount>
            <WidgetLgStatus>
              <Btn type='Decline' />
            </WidgetLgStatus>
          </WidgetLgTr>
          <WidgetLgTr>
            <WidgetLgUser>
              <WidgetLgImg src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
              <WidgetLgName>Susan Carol</WidgetLgName>
            </WidgetLgUser>
            <WidgetLgDate>2 jun 2021</WidgetLgDate>
            <WidgetLgAmount>$122.00</WidgetLgAmount>
            <WidgetLgStatus>
              <Btn type='Pending' />
            </WidgetLgStatus>
          </WidgetLgTr>
          <WidgetLgTr>
            <WidgetLgUser>
              <WidgetLgImg src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
              <WidgetLgName>Susan Carol</WidgetLgName>
            </WidgetLgUser>
            <WidgetLgDate>2 jun 2021</WidgetLgDate>
            <WidgetLgAmount>$122.00</WidgetLgAmount>
            <WidgetLgStatus>
              <Btn type='Aproved' />
            </WidgetLgStatus>
          </WidgetLgTr>
        </WidgetLgTable>
      </WidgetLgContent>
    </>
  );
};

export default WidgetLg;
