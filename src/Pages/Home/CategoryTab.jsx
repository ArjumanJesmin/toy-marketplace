/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryTab = () => {
    return (
        <Container className='my-5'>
             <Tabs>
      <TabList>
        <Tab>Subcategory 1</Tab>
        <Tab>Subcategory 2</Tab>
        <Tab>Subcategory 3</Tab>
      </TabList>

      <TabPanel>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, qui.</p>
        {/* <SubCategory1 /> */}
      </TabPanel>
      <TabPanel>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius doloribus nesciunt impedit similique exercitationem neque sapiente aliquam, esse voluptate libero?</p>
        {/* <SubCategory2 /> */}
      </TabPanel>
      <TabPanel>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem deserunt excepturi accusamus, dolorum odio explicabo.
        {/* <SubCategory3 /> */}
      </TabPanel>
    </Tabs>
        </Container>
    );
};

export default CategoryTab;