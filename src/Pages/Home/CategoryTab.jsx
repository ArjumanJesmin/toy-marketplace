/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryOne from './SubCategory/CategoryOne';
import CategoryThree from './SubCategory/CategoryThree';
import CategoryTwo from './SubCategory/CategoryTwo';

const CategoryTab = () => {
  return (
    <Container className='my-5'>
      <Tabs>
        <TabList>
          <Tab>Frozen</Tab>
          <Tab>Disney</Tab>
          <Tab>Animation</Tab>
        </TabList>

        <TabPanel>
          <CategoryOne />
        </TabPanel>
        <TabPanel>
          <CategoryTwo />
        </TabPanel>
        <TabPanel>
          <CategoryThree />
        </TabPanel>

      </Tabs>
    </Container>
  );
};

export default CategoryTab;