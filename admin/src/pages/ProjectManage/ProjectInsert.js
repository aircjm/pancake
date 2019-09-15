import React, {PureComponent} from 'react';
import {connect} from 'dva';
import {Button, Card, Col, DatePicker, Form, Input, Row, Select,} from 'antd';

import {PageHeaderWrapper} from '@ant-design/pro-layout';
import FooterToolbar from '@/components/FooterToolbar';
import styles from './style.less';


const FormItem = Form.Item;
const {Option} = Select;
const {RangePicker} = DatePicker;
const {TextArea} = Input;


@connect(({Project, Editor}) => ({
  Project,
  Editor,

}))

@Form.create()
class ProjectInsert extends PureComponent {

  state = {};

  componentDidMount() {

  }

  handleSubmit = e => {
    const {dispatch, form, Editor} = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      let d = {...values};
      if (!err) {
        d.isPublic = d.isPublic === "true";
        dispatch({
          type: 'Project/InsertSubmit',
          payload: d,
        });
      }
    });
  };

  render() {
    const {form: {getFieldDecorator, getFieldValue},} = this.props;
    return (
      <PageHeaderWrapper
        title={'插入项目'}
        content={'插入项目'}
      >
        <Card title="文章属性" className={styles.card}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col sm={5}>
                <Form.Item label="标题">
                  {getFieldDecorator('name', {
                    rules: [{required: true, message: '请输入话题名称'}],
                  })(
                    <Input
                      placeholder="请输入话题名称"
                    />)}
                </Form.Item>
              </Col>
              <Col sm={5} offset={1}>
                <Form.Item label="是否公开">
                  {getFieldDecorator('isPublic', {
                    rules: [{required: true, message: '是否公开'}],
                  })(
                    <Select>
                      <Option value="true">公开</Option>
                      <Option value="false">不公开</Option>
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col sm={5} offset={1}>
                <Form.Item label="logo">
                  {getFieldDecorator('logoUrl', {
                    //initialValue: logoUrl,
                    rules: [{required: true, message: '请输入logo地址'}],
                  })(
                    <Input
                      style={{width: '100%'}}
                      placeholder="请输入"
                    />
                  )}
                </Form.Item>
              </Col>
              <Col sm={5} offset={1}>
                <Form.Item label="url">
                  {getFieldDecorator('url', {
                    rules: [{required: true, message: '请输入url地址'}],
                  })(
                    <Input
                      style={{width: '100%'}}
                      placeholder="请输入"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>

              <Col sm={5}>
                <Form.Item label="frame地址">
                  {getFieldDecorator('frame', {
                    rules: [{required: true, message: '请输入frame地址'}],
                  })(
                    <Input
                      style={{width: '100%'}}
                      placeholder="请输入"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xl={24} lg={24} md={24} sm={24}>
                <FormItem label={'description'}>
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        message: "description",
                      },
                    ],
                  })(
                    <TextArea
                      style={{minHeight: 64, width: "100%"}}

                      rows={6}
                      cols={24}
                    />
                  )}
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Card>

        <Button type="primary" htmlType="submit" block onClick={this.handleSubmit}>
          提交
        </Button>
        <FooterToolbar>
          <div style={{'width': '100vw', position: 'absolute', left: 0, padding: '10px 306px 0 50px'}}>
            {/*<Button type="primary" style={{float:'left'}}*/}
            {/*        onClick={() => message.warning('请双击来删除该文章')}*/}
            {/*        onDoubleClick={() => this.deleteProject(url)} >*/}
            {/*  删除*/}
            {/*</Button>*/}
            <Button type="primary" htmlType="submit" onClick={this.handleSubmit} style={{float: 'right'}}>
              提交
            </Button>
          </div>

        </FooterToolbar>
      </PageHeaderWrapper>

    );
  }
}

export default ProjectInsert;
