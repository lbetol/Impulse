import { CloseButton } from "./CloseButton"

const feedbackTypes = {
    BUG: {
        title: 'Problema'
    },
    IDEA: {
        title: 'Ideia'
    },
    OTHER: {
        title: 'Outro'
    }

};

export function WidgetForm(){
    return(
        <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
                
                <CloseButton/>
            <header>
                <span className='tex-xl leading-6'>Deixe seu feedback</span>
            </header>
            <div className="flex py-8 gap-2 w-full">
                <button></button>
            </div>

            <footer className="text-xs text-neutral-400">
                Feito por <a className='underline underline-offset-2' href="https://github.com/lbetol">Alberto Barrios</a> 

            </footer>
        </div>
    )
}