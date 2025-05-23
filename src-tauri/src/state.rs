mod columns;
mod game;
mod logic;
mod player;
mod stats;

pub use columns::Column;
pub use game::{GameState, GameStateMutex};
pub use logic::{calculate_croak_chance, evaluate_moves};
use player::Player;
pub use player::PlayerMode;
use serde::{Deserialize, Serialize};
pub use stats::{HistoryMutex, StatsSummary};
use std::{collections::HashSet, fmt::Debug};

pub type Choice = (ColumnID, Option<ColumnID>);
pub type PlayerID = usize;
pub type ColumnID = usize;

#[derive(Default)]
pub struct AppContext {
    pub game: GameStateMutex,
    pub hist: HistoryMutex,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SettingsState {
    /// The number of players in the game
    pub players: Vec<Player>,
    /// Number of columns required to win
    win_cols: usize,
}

#[derive(Default, Debug, Clone, Serialize, Deserialize)]
pub struct DiceResult {
    pub dice: [usize; 4],
    pub choices: HashSet<Choice>,
}
