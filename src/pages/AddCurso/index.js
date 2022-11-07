import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Btn from '../../components/BotaoFlutuante';
import '../../styles/AddCurso.css';



function Index() {


    return (
        <>
            <Btn />
            <div className='pai-addCurso'>
                <h1 className='text-addCurso'>ADICIONAR CURSO</h1>
                <div className='addCurso-container'>
                <fieldset class="">
                        <div class="">
                            <h6 className='text-addCurso-periodo'>Selecione o Período:</h6>
                            <div class="" className='AddCurso-periodo'>
                                <div class="" >
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="Periodo"
                                            value="Manhã"
                                            required />
                                        Manhã
                                    </label>
                                </div>
                                <div class="">
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="Periodo"
                                            value="Tarde"
                                            required />
                                        Tarde
                                    </label>
                                </div>
                                <div class="">
                                    <label class="" for="gridRadios2">
                                        <input
                                            type="radio"
                                            name="Periodo"
                                            value="Noite"
                                            required />
                                        Noite
                                    </label>
                                </div>
                            </div>

                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    )
}

export default Index