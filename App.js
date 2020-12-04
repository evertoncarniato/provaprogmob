import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Header headerText='SACOLA' />
      <Delivery adress='Rua dos Alfeneiros, 4, Little Whinging, Surrey' />
      <View
        style={{
          borderBottomColor: '#bab8b8',
          borderBottomWidth: 0.1,
          margin: 30,
        }}
      />
      <Food />
      <FinishOrder />
    </View>
  );
}

const Header = (props) => {
  const { headerTextStyle, headerViewStyle } = styles;

  return (
    <View style={headerViewStyle}>
      <Text style={headerTextStyle}>{props.headerText}</Text>
    </View>
  );
};

const Delivery = (props) => {
  const { deliveryTextStyle, deliveryViewStyle, adressTextStyle } = styles;

  return (
    <View style={deliveryViewStyle}>
      <Text style={deliveryTextStyle}>Entregar em:</Text>
      <Text style={adressTextStyle}>{props.adress}</Text>
      <Text style={deliveryTextStyle}>Tempo de entrega:  30 - 40 min</Text>
      <Text style={deliveryTextStyle}>Entrega por Motoboy</Text>
    </View>
  );
};

const Food = (props) => {
  const { foodTitle, food, foodView, foodFinish } = styles;

  return (
    <View style={foodView}>
      <Text style={foodTitle}>Pub Três Vassouras</Text>
      <Text style={food}>2   Cerveja amanteigada (500ml)
        <Text style={food}>     R$ 20,00</Text>
      </Text>
      <Text style={food}>1   Batata frita (500g)
        <Text style={food}>                       R$ 15,00</Text>
      </Text>
      <View
        style={{
          borderBottomColor: '#bab8b8',
          borderBottomWidth: 0.1,
          margin: 10
        }}
      />
      <Text style={food}>
        <Text>Valor</Text>
        <Text style={{ marginLeft: 240 }}>R$ 35,00</Text>
      </Text>
      <Text style={food}>
        <Text>Frete</Text>
        <Text style={{ marginLeft: 240 }}>R$ 10,00</Text>
      </Text>
      <Text style={foodFinish}>
        <Text>Total</Text>
        <Text style={{ marginLeft: 240 }}>R$ 45,00</Text>
      </Text>
    </View>
  );
};

const FinishOrder = (props) => {
  const { finishOrderView, finishOrder, payment } = styles;

  return (
    <View style={finishOrderView}>
      <View
        style={{
          borderBottomColor: '#bab8b8',
          borderBottomWidth: 0.1,
        }}
      />
      <Text style={payment}>Pagamento no dinheiro</Text>
      <View style={finishOrder}>
        <Button 
          title='Fazer Pedido'
          color='#b80600'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerViewStyle: {
    backgroundColor: '#b80600',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerTextStyle: {
    fontSize: 25,
    paddingBottom: 20,
    color: 'white',
    fontWeight: 600
  },
  deliveryViewStyle: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20
  },
  deliveryTextStyle: {
    fontSize: 15
  },
  adressTextStyle: {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 0.1,
    borderColor: "#bab8b8",
    borderRadius: 6,
    backgroundColor: "#f8f8f8",
  },
  foodView: {
    paddingLeft: 30,
    paddingRight: 30
  },
  foodTitle: {
    fontSize: 30,
    fontWeight: 600,
  },
  food: {
    fontSize: 18
  },
  foodFinish: {
    fontSize: 18,
    fontWeight: 600
  },
  finishOrderView: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 50,
  },
  payment: {
    fontSize: 20,
    paddingTop: 10
  },
  finishOrder: {
    paddingTop: 60
  }
});
