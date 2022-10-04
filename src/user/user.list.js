import { Col, Row, Typography } from "antd";
import { UserCard } from "./user.card";

export const UserList = (props) => {
  return (
    <>
      <Typography.Title style={{ textAlign: "center" }}>
        User List
      </Typography.Title>
      <Row gutter={12}>
        {props.data.map((user) => {
          return (
            <Col key={user.id} span={12} style={{ marginBottom: 12 }}>
              <UserCard
                user={user}
                onDelete={props.onDelete}
                onUpdate={props.onUpdate}
              ></UserCard>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
