const tg = window.Telegram.WebApp;

export function useTelegram () {
  
  const onClose = () => {
    tg.close()
  }

  const onToggleButton = () => {
    if(tg.MainButton.isVisiable){
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  
  }

  return {
    onClose,
    tg,
    user:tg.initDataUnsafe?.user?.username
  }
}