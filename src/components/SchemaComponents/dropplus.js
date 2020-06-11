import PropTypes from 'prop-types';
import {
  Dropdown, Menu, Icon, Tooltip
} from 'antd';

import LocaleProvider from '../LocalProvider/index';

const DropPlus = (props, context) => {
  const {
    prefix, name, add, size
  } = props;
  const Model = context.Model.schema;
  console.log('DropPlus-add:', add);

  const menu = (
    <Menu>
      {size > 3 && (
        <Menu.Item>
          <span
            onClick={() => {
              Model.addFieldAction({ prefix, name });
            }}
          >
            {LocaleProvider('sibling_node')}
          </span>
        </Menu.Item>
      )}

      <Menu.Item>
        <span
          onClick={() => {
            Model.setOpenValueAction({
              key: [].concat(prefix, name, 'properties'),
              value: true,
            });
            Model.addChildFieldAction({
              key: [].concat(prefix, name, 'properties'),
            });
          }}
        >
          {LocaleProvider('child_node')}
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Tooltip placement="top" title={LocaleProvider('add_node')}>
      <Dropdown overlay={menu}>
        <Icon type="plus" className="plus" />
      </Dropdown>
    </Tooltip>
  );
};

DropPlus.contextTypes = {
  Model: PropTypes.object,
};

export default DropPlus;
