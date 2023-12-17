import React from "react";
import Header from "../../compoments/Header";
import Footer from "../../compoments/Footer";
import Items from "../../compoments/Items";
import Categories from "../../compoments/Categories";
import ShowFullItem from "../../compoments/ShowFullItem";
import './MainPage.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Gucci Light Brease',
          img: 'suit1.jpg',
          desc: 'Светло-Серый облегчённый. Пиджак с полуподкладом, приталенный силуэт.',
          category: 'Gucci',
          price: '94600'
        },

        {
          id: 2,
          title: 'Gucci Emerald',
          img: 'suit2.jpg',
          desc: 'Двубортный костюм изумрудного цвета с клубными пуговицами.',
          category: 'Gucci',
          price: '86700'
        },

        {
          id: 3,
          title: 'Gucci Datejust ',
          img: 'suit3.jpg',
          desc: `Костюм из льна . Изумрудный цвет. Костюм премиум пошива.`,
          category: 'Gucci',
          price: '65000'
        },

        {
          id: 4,
          title: 'Gucci Yacht-Master',
          img: 'suit4.jpg',
          desc: `Серо-Синий облегчённый. Пиджак с полуподкладом, приталенный силуэт. Новый формат ткани.`,
          category: 'Gucci',
          price: '112000'
        },

        {
          id: 5,
          title: 'Gucci Cosmograph Daytona',
          img: 'suit5.jpg',
          desc: 'Чёрный костюм из льна. Костюм премиум пошива. Каждая деталь костюма может использоваться отдельно.',
          category: 'Gucci',
          price: '98000'
        },

        {
          id: 6,
          title: 'Louis Vuitton Joker Suit',
          img: 'suit6.jpg',
          desc: 'Фиолетовый двубортный костюм фиолетового цвета в широкую полоску. Премиальный пошив.',
          category: 'Louis Vuitton',
          price: '153500'
        },

        {
          id: 7,
          title: 'Louis Vuitton Blue Carleone',
          img: 'suit7.jpg',
          desc: 'Синий двубортный костюм синего цвета в широкую полоску.',
          category: 'Louis Vuitton',
          price: '145900'
        },

        {
          id: 8,
          title: 'Louis Vuitton Classic Fusion',
          img: 'suit8.jpg',
          desc: 'Костюм из льна коричневого цвета. Монотонный',
          category: 'Louis Vuitton',
          price: '81700'
        },

        {
          id: 9,
          title: 'Louis Vuitton Big Bang',
          img: 'suit9.jpg',
          desc: 'Костюм синего цвета. Пиджак приталенный силуэт, английский лацкан.',
          category: 'Louis Vuitton',
          price: '72000'
        },

        {
          id: 10,
          title: 'Louis Vuitton Big Bang Jeans Carbon',
          img: 'suit10.jpg',
          desc: 'Костюм бежевого цвета рисунок микроклетка. Пиджак приталенный силуэт, английский лацкан.',
          category: 'Louis Vuitton',
          price: '100400'
        },

        {
          id: 11,
          title: 'Albione de Pasha',
          img: 'suit11.jpg',
          desc: 'Двубортный костюм светло-коричневого цвета.',
          category: 'Albione',
          price: '94300'
        },

        {
          id: 12,
          title: 'Albione Pasha Tourbillon',
          img: 'suit12.jpg',
          desc: 'Костюм синего цвета рисунок микроклетка. Пиджак приталенный силуэт.',
          category: 'Albione',
          price: '88200'
        },

        {
          id: 13,
          title: 'Albione Santos',
          img: 'suit13.jpg',
          desc: 'Двубортный костюм серого цвета.',
          category: 'Albione',
          price: '125000'
        },

        {
          id: 14,
          title: 'Albione Tank Americaine ',
          img: 'suit14.jpg',
          desc: 'Костюм светло-зелёного цвета.',
          category: 'Albione',
          price: '117000'
        },

        {
          id: 15,
          title: 'Albione Tank Divan ',
          img: 'suit15.jpg',
          desc: 'Костюм из льна фисташкового цвета. Пиджак облегчённый, без подклада, без подплечников.',
          category: 'Albione',
          price: '106800'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        {/* <div className='presentation'></div> */}
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>



    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }


  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    const existingItemIndex = this.state.orders.findIndex(order => order.id === item.id);
  
    if (existingItemIndex !== -1) {
      const updatedOrders = this.state.orders.map((order, index) => {
        if (index === existingItemIndex) {
          return { ...order, quantity: order.quantity + 1 }; 
        }
        return order;
      });
  
      this.setState({ orders: updatedOrders });
    } else {
      this.setState({ orders: [...this.state.orders, { ...item, quantity: 1 }] });
    }
  }
  
}

export default MainPage;
