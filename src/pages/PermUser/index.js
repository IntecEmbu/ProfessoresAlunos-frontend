import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Btn from '../../components/BotaoFlutuante';
import '../../styles/PermUser.css';



function Index() {


    return (
        <>
            <Btn />
            <div className='pai-Perm'>
                <h1 className='text-Perm'>Permitir Usuário</h1>
                <div className='Perm-container'>
                    <div className='justfy-perm'>
                        <fieldset class="">
                            <div className='perm-left'>
                                <h6>Dados do usuário:</h6>
                                <Form.Label className='rm-gt-n'>Selecione RM/GT e digite o número do registro.</Form.Label>
                                <div class="" className='Perm-rm'>
                                    <div class="" >
                                        <label class="" for="gridRadios2">
                                            <input
                                                type="radio"
                                                name="Dados"
                                                value="RM"
                                                required />
                                            RM
                                        </label>
                                    </div>
                                    <div class="">
                                        <label class="" for="gridRadios2">
                                            <input
                                                type="radio"
                                                name="Dados"
                                                value="GT"
                                                required />
                                            GT
                                        </label>
                                    </div>
                                    <div className='reg-number'>
                                        <Form.Label className='nr'>Numero: </Form.Label>
                                        <Form.Control
                                            type="number"
                                            required />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div className='perm-left-result'>
                            <Form.Label className='rm-gt-n'>Resultado:</Form.Label>
                            <div className='cont-perm-form'>
                                <Form.Control
                                    type="text"
                                    required />
                            </div>
                            <div className='btn-perm-excluir'>
                                <Button variant='danger'>Excluir</Button>
                                <Button>Adicionar</Button>
                            </div>
                        </div>
                    </div>
                    <div className='justfy-perm'>
                        <fieldset class="">
                            <div className='perm-left'>
                                <h6>Selecione a autorização:</h6>
                                <Form.Label className='rm-gt-n'>Autorização que será atribuida ao usuário.</Form.Label>
                                <div class="" className='Perm-aut'>
                                    <div class="" >
                                        <label class="" for="gridRadios2">
                                            <input
                                                type="radio"
                                                name="auto"
                                                value="Administrador"
                                                required />
                                            Administrador
                                        </label>
                                    </div>
                                    <div class="">
                                        <label class="" for="gridRadios2">
                                            <input
                                                type="radio"
                                                name="auto"
                                                value="Coordenador"
                                                required />
                                            Coordenador
                                        </label>
                                    </div>
                                    <div class="">
                                        <label class="" for="gridRadios2">
                                            <input
                                                type="radio"
                                                name="auto"
                                                value="Professor"
                                                required />
                                            Professor
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div className='btn-consultar'>
                            <Button> Consultar autorizados</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index