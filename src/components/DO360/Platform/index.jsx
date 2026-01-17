import React, { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab } from '@mui/material';

const pillarsData = [
    {
        name: 'Catalog',
        title: 'Catalog',
        description: [
            "Introducing the Data Catalog at DataObserve, where we organize and catalog your valuable data assets for seamless accessibility and enhanced data management. Our Data Catalog is a powerful tool designed to streamline data discovery, improve data governance, and enhance collaboration across your organization.",
            "With this feature, you can easily search, locate, and understand your data, enabling better decision-making, data-driven insights, and efficient utilization of your data resources. Whether you're a data scientist, analyst, or business user, our Data Catalog simplifies data exploration and ensures that your data is a strategic asset at your fingertips."
        ]
    },
    {
        name: 'Freshness',
        title: 'Freshness',
        description: [
            "In DataObserve, we take data freshness seriously with our robust data monitoring solutions. Our Freshness Monitoring feature is designed to ensure that your data is up-to-date and reliable for making critical business decisions. By continuously tracking data sources, we provide real-time insights into the timeliness of your information, allowing you to identify and rectify any delays or discrepancies promptly.",
            "With Freshness Monitoring, you can trust that your data is not only accurate but also current, enabling you to stay agile and responsive in today's fast-paced business environment."
        ]
    },
    {
        name: 'Schema',
        title: 'Schema',
        description: [
            "Schema monitoring is essential for maintaining data integrity and consistency. Our Schema Monitoring feature tracks changes to your data structures, alerting you to any unexpected modifications that could impact downstream processes.",
            "By monitoring schema evolution, you can ensure that your data pipelines remain robust and that changes are properly managed and documented across your organization."
        ]
    },
    {
        name: 'Volume',
        title: 'Volume',
        description: [
            "Volume monitoring helps you track the amount of data flowing through your pipelines. Our Volume Monitoring feature detects anomalies in data volume, alerting you to potential issues such as missing data, duplicate records, or unexpected spikes in data ingestion.",
            "This ensures that your data pipelines are operating efficiently and that you can quickly identify and resolve any volume-related issues."
        ]
    },
    {
        name: 'Lineage',
        title: 'Lineage',
        description: [
            "Data lineage provides end-to-end visibility into your data's journey from source to destination. Our Lineage feature maps out the complete data flow, showing how data is transformed, where it originates, and where it's consumed.",
            "This comprehensive view enables better impact analysis, troubleshooting, and compliance with data governance requirements."
        ]
    },
    {
        name: 'Events',
        title: 'Events',
        description: [
            "Event monitoring captures and tracks significant occurrences in your data ecosystem. Our Events feature provides real-time alerts and notifications for critical data incidents, pipeline failures, and quality issues.",
            "By monitoring events, you can respond quickly to data incidents, minimize downtime, and maintain the reliability of your data infrastructure."
        ]
    }
];

const Platform = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box sx={{ py: 8, bgcolor: '#f6f9ff' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        mb: 5,
                        color: '#2B2B2B',
                        fontFamily: "'Roboto Condensed', sans-serif",
                        textTransform: 'uppercase'
                    }}
                >
                    Pillars of Dataobserve 360
                </Typography>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        textColor="inherit"
                        sx={{
                            '& .MuiTabs-indicator': { backgroundColor: '#1E90FF' },
                            '& .MuiTab-root': {
                                textTransform: 'uppercase',
                                fontSize: '1rem',
                                fontWeight: 600,
                                minWidth: 120,
                                color: '#2B2B2B',
                                '&.Mui-selected': {
                                    color: '#1E90FF',
                                    fontFamily: "'Roboto Condensed', sans-serif"
                                }
                            }
                        }}
                    >
                        {pillarsData.map((pillar, index) => (
                            <Tab key={index} label={pillar.name} />
                        ))}
                    </Tabs>
                </Box>

                <Box sx={{ bgcolor: 'white', p: 4, borderRadius: "4px", minHeight: 300 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            mb: 3,
                            color: '#2B2B2B',
                            fontFamily: "'Roboto Condensed', sans-serif"
                        }}
                    >
                        {pillarsData[selectedTab].title}
                    </Typography>
                    {pillarsData[selectedTab].description.map((para, idx) => (
                        <Typography
                            key={idx}
                            variant="body1"
                            sx={{
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                mb: 2,
                                color: '#2B2B2B',
                                fontFamily: "'Merriweather', serif",
                                textAlign: 'justify'
                            }}
                        >
                            {para}
                        </Typography>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Platform;
