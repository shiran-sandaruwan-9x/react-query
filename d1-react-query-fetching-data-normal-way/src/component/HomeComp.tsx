import React from 'react';
import {customerServices} from "../services/CustomerServices";
import {Button, ButtonGroup, Card, CardContent, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";

interface CustomerProps {

}

interface CustomerState {
    customerDTO:any,
    isLoading:boolean
}

class HomeComp extends React.Component<CustomerProps,CustomerState> {

    constructor(props: Readonly<CustomerProps> | CustomerProps) {
        super(props);
        this.state={
            customerDTO:[],
            isLoading:true
        }
    }

    setIsLoading=()=>{
        customerServices.getAllCustomers()
            .then((response:any)=>{
                console.log(response)
                this.setState({
                    customerDTO:response,
                    isLoading:false
                })
            })
            .catch((error:any)=>{
                console.log(error)
            })
    }

    componentDidMount() {
       this.setIsLoading()
    }

    render() {
        return (
            <React.Fragment>
                <Card sx={{border:'1px solid black',width:'100%'}}>

                    <CardContent>
                        <TableContainer component={Paper} className='tableComp'>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{bgcolor:'black',color:'white'}}>cus id</TableCell>
                                        <TableCell sx={{bgcolor:'black',color:'white'}}>cus name</TableCell>
                                        <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>address</TableCell>
                                        <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>phone</TableCell>
                                        <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.state.customerDTO.map((customer:any)=>{
                                            return(
                                                <TableRow key={customer.cusId}>
                                                    <TableCell>{customer.cusId}</TableCell>
                                                    <TableCell>{customer.cusName}</TableCell>
                                                    <TableCell align='center'>{customer.address}</TableCell>
                                                    <TableCell align='center'>{customer.salary}</TableCell>
                                                    <TableCell align='center'>
                                                        <ButtonGroup>
                                                            <Button variant='contained'>update</Button>
                                                            <Button variant='contained'>delete</Button>
                                                        </ButtonGroup>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>

                </Card>
            </React.Fragment>
        );
    }
}

export default HomeComp;