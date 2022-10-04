import { Card, Descriptions } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  RedditOutlined,
} from "@ant-design/icons";

export const UserCard = (props) => {
  return (
    <Card
      actions={[
        <EditOutlined key="e" onClick={() => props.onUpdate(props.user)} />,
        <DeleteOutlined key="d" onClick={() => props.onDelete(props.user)} />,
      ]}
    >
      <Card.Meta
        avatar={<RedditOutlined style={{ fontSize: "36px" }} />}
        title={
          <strong>
            {props.user.firstName} {props.user.lastName}
          </strong>
        }
        description={
          <Descriptions
            column={2}
            layout="vertical"
            labelStyle={{ fontWeight: "bold" }}
            size="small"
          >
            <Descriptions.Item label="Country">
              {props.user.country}
            </Descriptions.Item>
            <Descriptions.Item label="City">
              {props.user.city}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              {props.user.address}
            </Descriptions.Item>
            {props.user.workAt && (
              <Descriptions.Item label="workAt">
                {props.user.workAt}
              </Descriptions.Item>
            )}
          </Descriptions>
        }
      ></Card.Meta>
    </Card>
  );
};
