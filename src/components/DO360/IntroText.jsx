import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const IntroText = () => {
    return (
        <Box sx={{ py: 5, bgcolor: '#EDEDED' }}>
            <Container maxWidth="lg">
                <div className="ai-power-content" style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <h2 className="do360-intro-title">What is observability?</h2>
                    <p className="do360-intro-subtitle">
                        Data observability is about ensuring the quality, reliability,
                        and performance of your data in the system by monitoring,
                        measuring, and analyzing it. This helps eliminate all arising
                        data anomalies by enabling teams to collect, profile, alert, and
                        resolve data issues in near real time.
                    </p>
                    <p className="do360-intro-subtitle" style={{ marginTop: '20px' }}>
                        Stay assured that your data is accurate and trustworthy for
                        analysis, decision-making, and downstream processes.
                        Implementing data observability practices and data governance
                        strategies helps improve your overall operational efficiency,
                        mitigate associated data risks with quality and productivity.
                    </p>
                </div>
            </Container>
        </Box>
    );
};

export default IntroText;
