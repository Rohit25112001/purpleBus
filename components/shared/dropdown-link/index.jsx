import { Menu, Dropdown } from 'antd';
const DropdownLink = ({ data }) => {
    const menuItems = data.dropdownMenu.map(item => (
      <Menu.Item key={item.key}>{item.label}</Menu.Item>
    ));
  
    return (
      <Dropdown placement="bottom" overlay={<Menu>{menuItems}</Menu>} className='hover:text-white'>
        <a>{data.label}</a>
      </Dropdown>
    );
  };

export default DropdownLink;