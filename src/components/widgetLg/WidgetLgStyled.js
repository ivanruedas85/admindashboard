import styled from "styled-components";

export const WidgetLgContent = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 11px -1px #000000;
  box-shadow: 0px 0px 11px -1px #000000;
  padding: 20px;
`;

export const WidgetLgTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

export const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

export const WidgetLgTr = styled.tr``;

export const WidgetLgTh = styled.th`
  text-align: left;
`;

export const WidgetLgUser = styled.td`
  display: flex;
  text-align: center;
  font-weight: 600;
`;

export const WidgetLgImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const WidgetLgName = styled.span``;

export const WidgetLgDate = styled.td`
  font-weight: 300;
`;

export const WidgetLgAmount = styled.td`
  font-weight: 300;
`;

export const WidgetLgStatus = styled.td``;

export const WidgetLgBtn = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  //! Buscar forma de aplicar los estilos al boton
  &.Aproved {
    background-color: #e5faf2;
    color: #3bb077;
  }
  &.Decline {
    background-color: #fff0f1;
    color: #d95087;
  }
  &.Pending {
    background-color: #ebf1fe;
    color: #2a7ade;
  }
`;